import React from 'react';
import PropTypes from 'prop-types';
import { withScrollPosition } from '../src';

const SubscribedToScrollPosition = (props) => {
  const { scrollPos } = props;

  return (
    <div style={{ border: '1px solid' }}>
      <p>
        {`scroll position: ${scrollPos}`}
      </p>
    </div>
  );
};

SubscribedToScrollPosition.propTypes = {
  scrollPos: PropTypes.number.isRequired,
};

export default withScrollPosition(SubscribedToScrollPosition);
