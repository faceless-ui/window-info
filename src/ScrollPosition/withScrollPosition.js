import React from 'react';
import ScrollPositionContext from './context';

const withScrollPosition = (PassedComponent) => {
  const ScrollPositionWrap = (props) => {
    return (
      <ScrollPositionContext.Consumer>
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
      </ScrollPositionContext.Consumer>
    );
  };
  return ScrollPositionWrap;
};

export default withScrollPosition;
