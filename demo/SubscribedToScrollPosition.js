import React from 'react';
import PropTypes from 'prop-types';
import { withScrollPosition } from '../src';

const SubscribedToScrollPosition = (props) => {
  const { scrollPos } = props;

  return (
    <div style={{ border: '1px solid', marginBottom: '10px' }}>
      <code>
        <p>
          {`scroll position: ${scrollPos}`}
        </p>
      </code>
    </div>
  );
};

SubscribedToScrollPosition.propTypes = {
  scrollPos: PropTypes.number.isRequired,
};

export default withScrollPosition(SubscribedToScrollPosition);
