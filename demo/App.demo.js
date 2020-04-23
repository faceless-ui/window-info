import React from 'react';
import { WindowInfoProvider, WindowInfo } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build
import WithWindowInfo from './WithWindowInfo.demo';
import UseWindowInfo from './UseWindowInfo.demo';
import PrintObject from './PrintObject';

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
    <WithWindowInfo />
    <UseWindowInfo />
    <WindowInfo>
      {(windowInfo) => PrintObject(windowInfo)}
    </WindowInfo>
  </WindowInfoProvider>
);

export default AppDemo;
