import React from 'react';
import WindowSizeContext from './context';

const withWindowSize = (PassedComponent) => {
  const WindowSizeWrap = () => {
    return (
      <WindowSizeContext.Consumer>
        {windowSizeContext => (
          <PassedComponent {...{ ...windowSizeContext }} />
        )}
      </WindowSizeContext.Consumer>
    );
  };
  return WindowSizeWrap;
};

export default withWindowSize;
