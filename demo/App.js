import React from 'react';
import { WindowInfoProvider, MousePositionProvider } from '../src';
import SubscribedToWindowSize from './SubscribedToWindowInfo';
import SubscribedToMousePosition from './SubscribedToMousePosition';
import SubscribedToScrollPosition from './SubscribedToScrollPosition';
import ScrollPositionProvider from '../src/ScrollPosition/provider';

const App = () => {
  return (
    <WindowInfoProvider
      throttle={300}
      tinyBreakpoint={400}
      smallBreakpoint={600}
      midBreakpoint={850}
      largeBreakpoint={1200}
    >
      <MousePositionProvider throttle={500}>
        <ScrollPositionProvider throttle={500}>
          <SubscribedToWindowSize passedProps="hi" />
          <SubscribedToScrollPosition />
          <SubscribedToMousePosition passedProps="hi" />
        </ScrollPositionProvider>
      </MousePositionProvider>
    </WindowInfoProvider>
  );
};

export default App;
