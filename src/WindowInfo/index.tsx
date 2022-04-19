import React, { Fragment } from 'react';
import useWindowInfo from '../useWindowInfo';
import { IWindowInfoContext } from '../WindowInfoContext';

export type ChildFunction = (context: IWindowInfoContext) => React.ReactNode; // eslint-disable-line no-unused-vars

const WindowInfo: React.FC<{
  children?: React.ReactNode | ChildFunction
}> = (props) => {
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
