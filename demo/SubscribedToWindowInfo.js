import React from 'react';
import PropTypes from 'prop-types';
import { withWindowInfo } from '../src';

const SubscribedToWindowInfo = (props) => {
  const {
    windowWidth,
    windowHeight,
    breakpoints: {
      tinyBreak,
      smallBreak,
      midBreak,
      largeBreak,
    },
  } = props;

  return (
    <div style={{ border: '1px solid', marginBottom: '50px' }}>
      <p>
        {`windowWidth: ${windowWidth}`}
      </p>
      <p>
        {`windowHeight: ${windowHeight}`}
      </p>
      <p>
        {`tinyBreak: ${tinyBreak}`}
      </p>
      <p>
        {`smallBreak: ${smallBreak}`}
      </p>
      <p>
        {`midBreak: ${midBreak}`}
      </p>
      <p>
        {`largeBreak: ${largeBreak}`}
      </p>
    </div>
  );
};

SubscribedToWindowInfo.defaultProps = {

};

SubscribedToWindowInfo.propTypes = {
  windowWidth: PropTypes.number.isRequired,
  windowHeight: PropTypes.number.isRequired,
  breakpoints: PropTypes.shape({
    tinyBreak: PropTypes.bool,
    smallBreak: PropTypes.bool,
    midBreak: PropTypes.bool,
    largeBreak: PropTypes.bool,
  }).isRequired,
};

export default withWindowInfo(SubscribedToWindowInfo);
