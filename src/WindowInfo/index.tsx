'use client'
import React, { Fragment } from 'react';
import useWindowInfo from '../useWindowInfo/index.js';
import { IWindowInfoContext } from '../WindowInfoProvider/context.js';

export type ChildFunction = (context: IWindowInfoContext) => React.ReactNode; // eslint-disable-line no-unused-vars

export type WindowInfoProps = {
  children?: React.ReactNode | ChildFunction
};

const WindowInfo: React.FC<WindowInfoProps> = (props) => {
  const { children } = props;
  const windowInfo = useWindowInfo();

  if (children) {
    if (typeof children === 'function') {
      return (
        <Fragment>
          {children(windowInfo)}
        </Fragment>
      )
    }

    return (
      <Fragment>
        {children}
      </Fragment>
    )
  }
  return null;
};

export default WindowInfo;
