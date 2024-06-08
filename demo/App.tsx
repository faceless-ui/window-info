import React from 'react';
import { WindowInfoProvider } from '@faceless-ui/window-info';
import StylesheetDemo from './Stylesheet.demo.js';
// import WithWindowInfo from './WithWindowInfo.demo.js';
import UseWindowInfo from './UseWindowInfo.demo.js';
// import LogProps from './LogProps';

const breakpoints = {
  'mobile-first-xs': '(min-width: 350px)',
  'mobile-first-s': '(min-width: 576px)',
  'mobile-first-m': '(min-width: 850px)',
  'mobile-first-l': '(min-width: 992px)',
  'mobile-first-xl': '(min-width: 1200px)',

  'desktop-first-xs': '(max-width: 350px)',
  'desktop-first-s': '(max-width: 576px)',
  'desktop-first-m': '(max-width: 850px)',
  'desktop-first-l': '(max-width: 992px)',
  'desktop-first-xl': '(max-width: 1200px)',
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
