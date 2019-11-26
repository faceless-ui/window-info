import React, { useContext } from 'react';
import WindowInfoContext from '../WindowInfoProvider/context';

const withWindowInfo = (PassedComponent) => {
  const WindowInfoWrap = (props) => {
    const context = useContext(WindowInfoContext);
    return (
      <PassedComponent
        {...{
          ...props,
          ...context,
        }}
      />
    );
  };
  return WindowInfoWrap;
};

export default withWindowInfo;
