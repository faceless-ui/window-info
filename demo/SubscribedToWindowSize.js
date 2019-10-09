import React from 'react';
import PropTypes from 'prop-types';
import { withWindowSize } from '../src';

const SubscribedToWindowSize = (props) => {
  const { windowWidth, windowHeight } = props;

  return (
    <div>
      <p>
        {`window width: ${windowWidth}`}
      </p>
      <p>
        {`window height: ${windowHeight}`}
      </p>
    </div>
  );
};

SubscribedToWindowSize.defaultProps = {

};

SubscribedToWindowSize.propTypes = {
  windowWidth: PropTypes.number.isRequired,
  windowHeight: PropTypes.number.isRequired,
};

export default withWindowSize(SubscribedToWindowSize);
