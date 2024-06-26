'use client'
import React, { useCallback, useEffect, useReducer, useRef } from 'react';
import { WindowInfoContext, type IWindowInfoContext } from '../WindowInfoProvider/context.js';

type AnimationRef = React.MutableRefObject<number | null>;

type ReducerAction = {
  type: 'UPDATE'
  payload: {
    breakpoints: Breakpoints
    animationRef: AnimationRef
  }
}

const reducer = (
  state: IWindowInfoContext,
  action: ReducerAction
): IWindowInfoContext => {
  const {
    payload: {
      breakpoints,
      animationRef,
    }
  } = action;

  animationRef.current = null;

  const {
    eventsFired: prevEventsFired,
  } = state;

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

  const watchedBreakpoints = breakpoints ? Object.keys(breakpoints).reduce((matchMediaBreakpoints, key) => ({
    ...matchMediaBreakpoints,
    [key]: window.matchMedia(breakpoints[key]).matches,
  }), {}) : {};

  const newState = {
    width: windowWidth,
    height: windowHeight,
    '--vw': viewportWidth,
    '--vh': viewportHeight,
    breakpoints: watchedBreakpoints,
    eventsFired: prevEventsFired + 1,
  };

  // This method is a cross-browser patch to achieve above-the-fold, fullscreen mobile experiences.
  // The technique accounts for the collapsing bottom toolbar of some mobile browsers which are out of normal flow.
  // It provides an alternate to the "vw" and "vh" CSS units by generating respective CSS variables.
  // It specifically reads the size of documentElement since its height does not include the toolbar.
  style.setProperty('--vw', viewportWidth);
  style.setProperty('--vh', viewportHeight);

  return newState;
};

export type Breakpoints = {
  [key: string]: string
}

export type WindowInfoProviderProps = {
  breakpoints: Breakpoints
  children?: React.ReactNode
}

export const WindowInfoProvider: React.FC<WindowInfoProviderProps> = (props) => {
  const {
    breakpoints,
    children,
  } = props;

  const animationRef = useRef<number | null>(null);

  const [state, dispatch] = useReducer(reducer, {
    width: undefined,
    height: undefined,
    '--vw': '',
    '--vh': '',
    breakpoints: {},
    eventsFired: 0,
  } as IWindowInfoContext);

  const requestAnimation = useCallback((): void => {
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    animationRef.current = requestAnimationFrame(
      () => dispatch({
        type: 'UPDATE',
        payload: {
          breakpoints,
          animationRef,
        }
      }),
    );
  }, [breakpoints]);

  const requestThrottledAnimation = useCallback((): void => {
    setTimeout(() => {
      requestAnimation();
    }, 500);
  }, [requestAnimation]);

  useEffect(() => {
    window.addEventListener('resize', requestAnimation);
    window.addEventListener('orientationchange', requestThrottledAnimation);

    return () => {
      window.removeEventListener('resize', requestAnimation);
      window.removeEventListener('orientationchange', requestThrottledAnimation);
    };
  }, [
    requestAnimation,
    requestThrottledAnimation,
  ]);

  // use this effect to test rAF debounce by requesting animation every 1ms, for a total 120ms
  // results: ~23 requests will be cancelled, ~17 requests will be cancelled, and only ~8 will truly dispatch
  // useEffect(() => {
  //   const firstID = setInterval(requestAnimation, 1);
  //   setInterval(() => clearInterval(firstID), 120);
  // }, [requestAnimation]);

  useEffect(() => {
    if (state.eventsFired === 0) {
      dispatch({
        type: 'UPDATE',
        payload: {
          breakpoints,
          animationRef,
        }
      });
    }
  }, [
    breakpoints,
    state,
  ]);

  return (
    <WindowInfoContext.Provider
      value={{
        ...state,
      }}
    >
      {children && children}
    </WindowInfoContext.Provider>
  );
};
