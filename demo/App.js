import React from 'react';
import { WindowSize } from '../src';
import SubscribedToWindowSize from './SubscribedToWindowSize';

const App = () => {
  return (
    <WindowSize>
      <SubscribedToWindowSize />
    </WindowSize>
  );
};

export default App;
