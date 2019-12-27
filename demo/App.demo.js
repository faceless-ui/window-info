import React from 'react';
import { WindowInfoProvider } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build
import WindowInfoDemo from './WindowInfo.demo';

const AppDemo = () => (
  <WindowInfoProvider
    breakpoints={{
      xs: 350,
      s: 576,
      m: 768,
      l: 992,
      xl: 1200,
    }}
  >
    <WindowInfoDemo />
  </WindowInfoProvider>
);

export default AppDemo;
