import React from 'react';
import PropTypes from 'prop-types';
import { withScrollPosition } from '../src'; // swap '../src' for '../dist/build.bundle' to test production

const SubscribedToScrollPosition = (props) => {
  const {
    scrollPos: {
      x,
      y,
    },
  } = props;

  return (
    <code>
      <p>
        {`scroll position: { x: ${x}, y: ${y} }`}
      </p>
    </code>
  );
};

SubscribedToScrollPosition.propTypes = {
  scrollPos: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
};

export default withScrollPosition(SubscribedToScrollPosition);
