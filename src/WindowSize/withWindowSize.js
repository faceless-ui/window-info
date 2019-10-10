import React from 'react';
import WindowSizeContext from './context';

const withWindowSize = (PassedComponent) => {
  const WindowSizeWrap = (props) => {
    return (
      <WindowSizeContext.Consumer>
        {(context) => {
          return (
            <PassedComponent
              {...{
                ...props,
                ...context,
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
