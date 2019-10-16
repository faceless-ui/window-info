import React from 'react';
import PropTypes from 'prop-types';
import { withWindowInfo } from '../src';

const SubscribedToWindowInfo = (props) => {
  const {
    windowWidth,
    windowHeight,
    breakpoints: {
      xs, s, m, l, xl,
    },
  } = props;

  return (
    <div style={{ border: '1px solid', marginBottom: '10px' }}>
      <code>
        <p>
          {`windowWidth: ${windowWidth}`}
        </p>
        <p>
          {`windowHeight: ${windowHeight}`}
        </p>
        <p>
          {`xs: ${xs}`}
        </p>
        <p>
          {`s: ${s}`}
        </p>
        <p>
          {`m: ${m}`}
        </p>
        <p>
          {`l: ${l}`}
        </p>
        <p>
          {`xl: ${xl}`}
        </p>
      </code>
    </div>
  );
};

SubscribedToWindowInfo.defaultProps = {

};

SubscribedToWindowInfo.propTypes = {
  windowWidth: PropTypes.number.isRequired,
  windowHeight: PropTypes.number.isRequired,
  breakpoints: PropTypes.shape({
    xs: PropTypes.bool,
    s: PropTypes.bool,
    m: PropTypes.bool,
    l: PropTypes.bool,
    xl: PropTypes.bool,
  }).isRequired,
};

export default withWindowInfo(SubscribedToWindowInfo);
