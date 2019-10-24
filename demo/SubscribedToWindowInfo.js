import React from 'react';
import PropTypes from 'prop-types';
import { withWindowInfo } from '../src';

const SubscribedToWindowInfo = (props) => {
  const {
    windowInfo: {
      width,
      height,
      breakpoints: {
        xs, s, m, l, xl,
      },
    },
  } = props;

  return (
    <code>
      <p>
        {`windowWidth: ${width}`}
      </p>
      <p>
        {`windowHeight: ${height}`}
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
  );
};

SubscribedToWindowInfo.defaultProps = {

};

SubscribedToWindowInfo.propTypes = {
  windowInfo: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    breakpoints: PropTypes.shape({
      xs: PropTypes.bool,
      s: PropTypes.bool,
      m: PropTypes.bool,
      l: PropTypes.bool,
      xl: PropTypes.bool,
    }),
  }).isRequired,
};

export default withWindowInfo(SubscribedToWindowInfo);
