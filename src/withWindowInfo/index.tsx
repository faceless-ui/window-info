import React from 'react';
import useWindowInfo from '../useWindowInfo';

const withWindow = <P extends Record<string, unknown>>(
  PassedComponent: React.ComponentType<P>,
): React.FC<P> => {
  const WindowInfoWrap: React.FC<P> = (props) => {
    const windowInfoContext = useWindowInfo();

    return (
      <PassedComponent
        {...{
          ...props,
          windowInfo: windowInfoContext,
        }}
      />
    );
  };
  return WindowInfoWrap;
};

export default withWindow;
