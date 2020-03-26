import React from 'react';
import WindowInfoContext from '../WindowInfoProvider/context';

const withWindowInfo = (PassedComponent) => {
  const WindowInfoWrap = (props) => (
    <WindowInfoContext.Consumer>
      {(context) => (
        <PassedComponent
          {...{
            ...props,
            windowInfo: context,
          }}
        />
      )}
    </WindowInfoContext.Consumer>
  );
  return WindowInfoWrap;
};

export default withWindowInfo;
