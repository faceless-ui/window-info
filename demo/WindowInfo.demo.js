import React from 'react';
import PropTypes from 'prop-types';
import { withWindowInfo } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build

const WindowInfoDemo = (props) => {
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
      <pre>
        {`windowWidth: ${width}`}
        <br />
        {`windowHeight: ${height}`}
        <br />
        {`xs: ${xs}`}
        <br />
        {`s: ${s}`}
        <br />
        {`m: ${m}`}
        <br />
        {`l: ${l}`}
        <br />
        {`xl: ${xl}`}
      </pre>
    </code>
  );
};

WindowInfoDemo.defaultProps = {

};

WindowInfoDemo.propTypes = {
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

export default withWindowInfo(WindowInfoDemo);
