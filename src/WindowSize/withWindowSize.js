import React from 'react';
import WindowSizeContext from './context';

const withWindowSize = (PassedComponent) => {
  const WindowSizeWrap = (props) => {
    return (
      <WindowSizeContext.Consumer>
        {(windowSizeContext) => {
          return (
            <PassedComponent
              {...{
                ...props,
                ...windowSizeContext,
              }}
            />
          );
        }}
      </WindowSizeContext.Consumer>
    );
  };
  return WindowSizeWrap;
};

export default withWindowSize;
