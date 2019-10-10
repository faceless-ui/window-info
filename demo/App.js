import React from 'react';
import { WindowSizeProvider, MousePositionProvider } from '../src';
import SubscribedToWindowSize from './SubscribedToWindowSize';
import SubscribedToMousePosition from './SubscribedToMousePosition';

const App = () => {
  return (
    <WindowSizeProvider throttle={500}>
      <MousePositionProvider throttle={500}>
        <SubscribedToWindowSize passedProps="hi" />
        <SubscribedToMousePosition passedProps="hi" />
      </MousePositionProvider>
    </WindowSizeProvider>
  );
};

export default App;
