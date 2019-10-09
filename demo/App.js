import React from 'react';
import { WindowSize } from '../src';
import SubscribedToWindowSize from './SubscribedToWindowSize';

const App = () => {
  return (
    <WindowSize>
      <SubscribedToWindowSize passedProps="hi" />
    </WindowSize>
  );
};

export default App;
