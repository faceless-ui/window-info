import React from 'react';
import PropTypes from 'prop-types';
import { withMousePosition } from '../src';

const SubscribedToMousePosition = (props) => {
  const { mouseIsInViewport, mousePos: { x, y } } = props;

  return (
    <div style={{ border: '1px solid' }}>
      <p>
        {`mouse x position: ${x}`}
      </p>
      <p>
        {`mouse y position: ${y}`}
      </p>
      <p>
        {`mouse is in viewport: ${mouseIsInViewport}`}
      </p>
    </div>
  );
};

SubscribedToMousePosition.defaultProps = {

};

SubscribedToMousePosition.propTypes = {
  mousePos: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
  mouseIsInViewport: PropTypes.bool.isRequired,
};

export default withMousePosition(SubscribedToMousePosition);
