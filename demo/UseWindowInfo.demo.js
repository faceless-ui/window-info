import React from 'react';
import { useWindowInfo } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build

const UseWindowInfo = () => {
  const {
    width,
    height,
    breakpoints: {
      xs, s, m, l, xl,
    },
    eventsFired,
  } = useWindowInfo();

  return (
    <code>
      <pre>
        {'windowInfo: {'}
        <br />
        &emsp;
        {`width: ${width},`}
        <br />
        &emsp;
        {`height: ${height},`}
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
        {`eventsFired: ${eventsFired},`}
        <br />
        {'}'}
      </pre>
    </code>
  );
};

export default UseWindowInfo;
