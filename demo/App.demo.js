import React, { Fragment } from 'react';
import { WindowInfoProvider, MousePositionProvider, ScrollPositionProvider } from '../src'; // swap '../src' for '../dist/build.bundle' to test production
import WindowInfoDemo from './WindowInfo.demo';
import MousePositionDemo from './MousePosition.demo';
import ScrollPositionDemo from './ScrollPosition.demo';

const App = () => {
  return (
    <Fragment>
      <div style={{ border: '1px solid', marginBottom: '10px' }}>
        <WindowInfoProvider
          breakpoints={{
            xs: 350,
            s: 576,
            m: 768,
            l: 992,
            xl: 1200,
          }}
        >
          <WindowInfoDemo passedProps="hi" />
        </WindowInfoProvider>
      </div>

      <div style={{ border: '1px solid', marginBottom: '10px' }}>
        <MousePositionProvider>
          <MousePositionDemo passedProps="hi" />
        </MousePositionProvider>
      </div>

      <div style={{ border: '1px solid', marginBottom: '10px' }}>
        <ScrollPositionProvider>
          <ScrollPositionDemo />
        </ScrollPositionProvider>
      </div>

      <div style={{ height: '1000px', width: '2000px' }} />
    </Fragment>
  );
};

export default App;
