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
      eventsFired,
    },
  } = props;

  return (
    <code>
      <pre>
        {'scrollInfo: {'}
        <br />
          &emsp;
        {`windowWidth: ${width},`}
        <br />
          &emsp;
        {`windowHeight: ${height},`}
        <br />
          &emsp;
        {'breakpoints: {'}
        <br />
          &emsp;&emsp;
        {`xs: ${xs},`}
        <br />
          &emsp;&emsp;
        {`s: ${s},`}
        <br />
          &emsp;&emsp;
        {`m: ${m},`}
        <br />
          &emsp;&emsp;
        {`l: ${l},`}
        <br />
          &emsp;&emsp;
        {`xl: ${xl},`}
        <br />
          &emsp;
        {'},'}
        <br />
          &emsp;
        {`eventsFired: ${eventsFired}`}
        <br />
        {'}'}
      </pre>
    </code>
  );
};

WindowInfoDemo.defaultProps = {};

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
    orientation: PropTypes.number,
    eventsFired: PropTypes.number,
  }).isRequired,
};

export default withWindowInfo(WindowInfoDemo);
