import React from 'react';
import {
  WindowInfoProvider,
  // WindowInfo
} from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build
import StylesheetDemo from './Stylesheet.demo';
// import WithWindowInfo from './WithWindowInfo.demo';
import UseWindowInfo from './UseWindowInfo.demo';
// import LogProps from './LogProps';

const breakpoints = {
  xs: 350,
  s: 576,
  m: 850,
  l: 992,
  xl: 1200,
};

const AppDemo: React.FC = () => (
  <WindowInfoProvider breakpoints={breakpoints}>
    <UseWindowInfo />
    {/* <WithWindowInfo /> */}
    {/* <WindowInfo>
      {(windowInfo) => LogProps(windowInfo)}
    </WindowInfo> */}
    <StylesheetDemo breakpoints={breakpoints} />
  </WindowInfoProvider>
);

export default AppDemo;
