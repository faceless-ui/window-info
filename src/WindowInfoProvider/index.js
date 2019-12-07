import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import WindowInfoContext from './context';

const WindowInfoProvider = (props) => {
  const { children, breakpoints } = props;

  const [isAnimationScheduled, setIsAnimationScheduled] = useState(false);
  const [numEventsFired, setNumEventsFired] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [breakpointStatus, setBreakpointStatus] = useState({
    xs: false,
    s: false,
    m: false,
    l: false,
    xl: false,
  });

  useEffect(() => {
    function setDocumentCSSVariables() {
      const {
        documentElement: {
          style,
          clientWidth,
          clientHeight,
        },
      } = document;

      style.setProperty('--vw', `${clientWidth * 0.01}px`);
      style.setProperty('--vh', `${clientHeight * 0.01}px`);
    }

    function updateWindowInfo() {
      const { xs, s, m, l, xl } = breakpoints;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      setIsAnimationScheduled(false);
      setWidth(windowWidth);
      setHeight(windowHeight);
      setBreakpointStatus({
        xs: windowWidth <= xs,
        s: windowWidth <= s,
        m: windowWidth <= m,
        l: windowWidth <= l,
        xl: windowWidth <= xl,
      });

      setDocumentCSSVariables();
    }

    function requestAnimation() {
      if (!isAnimationScheduled) {
        requestAnimationFrame(updateWindowInfo);
        setIsAnimationScheduled(true);
        setNumEventsFired(numEventsFired + 1);
      }
    }

    const updateWindowInfoWithTimeout = () => setTimeout(() => {
      requestAnimation();
    }, 500);

    window.addEventListener('resize', requestAnimation);
    window.addEventListener('orientationchange', updateWindowInfoWithTimeout);
    if (numEventsFired === 0) updateWindowInfo();

    return function cleanup() {
      window.removeEventListener('resize', requestAnimation);
      window.removeEventListener('orientationchange', updateWindowInfoWithTimeout);
      clearTimeout(updateWindowInfoWithTimeout);
    };
  }, [breakpoints, isAnimationScheduled, numEventsFired]);

  return (
    <WindowInfoContext.Provider
      value={{
        windowInfo: {
          width,
          height,
          breakpoints: breakpointStatus,
          eventsFired: numEventsFired,
        },
      }}
    >
      {children}
    </WindowInfoContext.Provider>
  );
};

WindowInfoProvider.defaultProps = {
  breakpoints: {},
};

WindowInfoProvider.propTypes = {
  children: PropTypes.node.isRequired,
  breakpoints: PropTypes.shape({
    xs: PropTypes.number,
    s: PropTypes.number,
    m: PropTypes.number,
    l: PropTypes.number,
    xl: PropTypes.number,
  }),
};

export default WindowInfoProvider;
