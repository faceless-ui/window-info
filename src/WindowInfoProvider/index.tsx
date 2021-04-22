import React, { useCallback, useEffect, useReducer } from 'react';
import { Breakpoints } from '../types';
import WindowInfoContext, { IWindowInfoContext } from '../WindowInfoContext';

type Props = {
  breakpoints: Breakpoints
}

type Reducer = (state:IWindowInfoContext, payload:any) => IWindowInfoContext

const initialState = {
  width: 0,
  height: 0,
  '--vw': '0px',
  '--vh': '0px',
  breakpoints: undefined,
  eventsFired: 0,
  animationScheduled: false,
};

const reducer:Reducer = (state, payload) => ({
  ...state,
  ...payload,
});

const WindowInfoProvider: React.FC<Props> = (props) => {
  const { breakpoints, children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);

  const generateMediaQueries = useCallback(() => Object.keys(breakpoints).reduce((matchMediaBreakpoints, key) => ({
    ...matchMediaBreakpoints,
    [key]: window.matchMedia(breakpoints[key]).matches,
  }), {}), [breakpoints]);

  const updateWindowInfo = useCallback((): void => {
    const { eventsFired: prevEventsFired } = state;

    const {
      documentElement: {
        style,
        clientWidth,
        clientHeight,
      },
    } = document;

    const {
      innerWidth: windowWidth,
      innerHeight: windowHeight,
    } = window;

    const viewportWidth = `${clientWidth / 100}px`;
    const viewportHeight = `${clientHeight / 100}px`;

    dispatch({
      width: windowWidth,
      height: windowHeight,
      '--vw': viewportWidth,
      '--vh': viewportHeight,
      breakpoints: { ...generateMediaQueries() },
      eventsFired: prevEventsFired + 1,
      animationScheduled: false,
    });

    // This method is a cross-browser patch to achieve above-the-fold, fullscreen mobile experiences.
    // The technique accounts for the collapsing bottom toolbar of some mobile browsers which are out of normal flow.
    // It provides an alternate to the "vw" and "vh" CSS units by generating respective CSS variables.
    // It specifically reads the size of documentElement since its height does not include the toolbar.
    style.setProperty('--vw', viewportWidth);
    style.setProperty('--vh', viewportHeight);
  }, [generateMediaQueries, state]);

  const requestAnimation = useCallback((): void => {
    const { animationScheduled } = state;
    if (!animationScheduled) {
      dispatch({
        animationScheduled: false,
      });
      requestAnimationFrame(updateWindowInfo);
    }
  }, [state, updateWindowInfo]);

  const updateWindowInfoWithTimeout = useCallback((): void => {
    setTimeout(() => {
      requestAnimation();
    }, 500);
  }, [requestAnimation]);

  useEffect(() => {
    window.addEventListener('resize', requestAnimation);
    window.addEventListener('orientationchange', updateWindowInfoWithTimeout);

    return () => {
      window.removeEventListener('resize', requestAnimation);
      window.removeEventListener('orientationchange', updateWindowInfoWithTimeout);
    };
  }, [requestAnimation, updateWindowInfoWithTimeout]);

  useEffect(() => {
    if (state.eventsFired === 0) {
      updateWindowInfo();
    }
  }, [updateWindowInfo, state]);

  const windowInfo = { ...state };
  delete windowInfo.animationScheduled;

  return (
    <WindowInfoContext.Provider value={{ ...windowInfo }}>
      {children && children}
    </WindowInfoContext.Provider>
  );
};

export default WindowInfoProvider;
