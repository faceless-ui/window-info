[![NPM](https://img.shields.io/npm/v/@faceless-ui/window-info)](https://www.npmjs.com/@faceless-ui/window-info)
![Bundle Size](https://img.shields.io/bundlephobia/minzip/@faceless-ui/window-info?label=zipped)
[![Supported by TRBL](https://img.shields.io/badge/supported_by-TRBL-black)](https://github.com/trouble)

# React Window Info

A utility for subscribing to window events. Useful for conditional rendering, CSS breakpoints, or any window-based triggers.

## Highlights

- #### Event Consolidation
  One event, many effects. Attach one, single event listener to the window with [WindowInfoProvider](./src/WindowInfoProvider/README.md). Then subscribe to it from anywhere with [useWindowInfo](./useWindowInfo/README.md), [withWindowInfo](./withWindowInfo/README.md), or [WindowInfo](./WindowInfo/README.md), they all do the same thing.

- #### Animation Ready
  Piped through [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) for built-in throttling and debouncing.

## Quick Start

### Installation

```bash
$ npm i @faceless-ui/window-info
$ # or
$ yarn add @faceless-ui/window-info
```

### Composition

```jsx
  import React from 'react';
  import {
    WindowInfo,
    WindowInfoProvider,
    withWindowInfo,
    useWindowInfo
  } from '@faceless-ui/window-info';

  const WithWindowInfo = withWindowInfo(({ windowInfo }) => <div>{windowInfo}</div>);
  const UseWindowInfo = () => <div>{useWindowInfo()}</div>;

  const App = () => (
    <WindowInfoProvider>
      <WithWindowInfo />
      <UseWindowInfo />
      <WindowInfo>
        {(windowInfo) => <div>{windowInfo}</div>}
      <WindowInfo>
    </WindowInfoProvider>
  );

  export default App;
```

For working examples, see the [demo app](./demo/App.demo.js).

## Demo

```bash
$ git clone git@github.com:faceless-ui/window-info.git
$ yarn
$ yarn dev
$ open http://localhost:3000
```

## API

  - [useWindowInfo](./src/useWindowInfo/README.md)
  - [WindowInfo](./src/WindowInfo/README.md)
  - [WindowInfoProvider](./src/WindowInfoProvider/README.md)
  - [withWindowInfo](./src/withWindowInfo/README.md)

## Contribution

[Help us,](https://github.com/faceless-ui/.github/blob/master/CONTRIBUTING.md) or let us [help you help us](https://github.com/faceless-ui/.github/blob/master/SUPPORT.md).

## License

[MIT](https://github.com/faceless-ui/window-info/blob/master/LICENSE) Copyright (c) TRBL, LLC
