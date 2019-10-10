import React from 'react';
import WindowInfoContext from './context';

const withWindowInfo = (PassedComponent) => {
  const WindowInfoWrap = (props) => {
    return (
      <WindowInfoContext.Consumer>
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
      </WindowInfoContext.Consumer>
    );
  };
  return WindowInfoWrap;
};

export default withWindowInfo;
