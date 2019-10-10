import React from 'react';
import { WindowSize, MousePosition } from '../src';
import SubscribedToWindowSize from './SubscribedToWindowSize';
import SubscribedToMousePosition from './SubscribedToMousePosition';

const App = () => {
  return (
    <WindowSize throttle={500}>
      <MousePosition throttle={500}>
        <SubscribedToWindowSize passedProps="hi" />
        <SubscribedToMousePosition passedProps="hi" />
      </MousePosition>
    </WindowSize>
  );
};

export default App;
