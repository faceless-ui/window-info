import React from 'react';
import PropTypes from 'prop-types';
import { withMousePosition } from '../src';

const SubscribedToMousePosition = (props) => {
  const {
    mousePos: {
      x,
      y,
      isInViewport,
    },
  } = props;

  return (
    <code>
      <p>
        {`mouse x position: ${x}`}
      </p>
      <p>
        {`mouse y position: ${y}`}
      </p>
      <p>
        {`mouse is in viewport: ${isInViewport}`}
      </p>
    </code>
  );
};

SubscribedToMousePosition.defaultProps = {

};

SubscribedToMousePosition.propTypes = {
  mousePos: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    isInViewport: PropTypes.bool,
  }).isRequired,
};

export default withMousePosition(SubscribedToMousePosition);
