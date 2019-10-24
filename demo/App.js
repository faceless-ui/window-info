import React, { Fragment } from 'react';
import { WindowInfoProvider, MousePositionProvider } from '../src';
import SubscribedToWindowInfo from './SubscribedToWindowInfo';
import SubscribedToMousePosition from './SubscribedToMousePosition';
import SubscribedToScrollPosition from './SubscribedToScrollPosition';
import ScrollPositionProvider from '../src/ScrollPosition/provider';

const App = () => {
  return (
    <Fragment>
      <div style={{ border: '1px solid', marginBottom: '10px' }}>
        <WindowInfoProvider
          throttle={300}
          breakpoints={{
            xs: 350,
            s: 576,
            m: 768,
            l: 992,
            xl: 1200,
          }}
        >
          <SubscribedToWindowInfo passedProps="hi" />
        </WindowInfoProvider>
      </div>

      <div style={{ border: '1px solid', marginBottom: '10px' }}>
        <MousePositionProvider throttle={500}>
          <SubscribedToMousePosition passedProps="hi" />
        </MousePositionProvider>
      </div>

      <div style={{ border: '1px solid', marginBottom: '10px' }}>
        <ScrollPositionProvider throttle={500}>
          <SubscribedToScrollPosition />
        </ScrollPositionProvider>
      </div>

      <div style={{ height: '1000px', width: '2000px' }} />
    </Fragment>
  );
};

export default App;
