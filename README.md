[![NPM](https://img.shields.io/npm/v/@trbl/react-window-info)](https://www.npmjs.com/@trbl/react-window-info)
![Bundle Size](https://img.shields.io/bundlephobia/minzip/@trbl/react-window-info?label=zipped)
[![Supported by TRBL](https://img.shields.io/badge/supported_by-TRBL-black)](https://github.com/trouble)

# React Window Info

## Highlights

## Quick Start

### Installation

```bash
$ npm i @trbl/react-window-info
$ # or
$ yarn add @trbl/react-window-info
```

### Composition

```jsx
  import React from 'react';
  import {
    WindowInfo,
    WindowInfoProvider,
    withWindowInfo,
    useWindowInfo
  } from '@trbl/react-window-info';

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
$ git clone git@github.com:trouble/react-window-info.git
$ yarn
$ yarn dev
$ open http://localhost:3000
```

## Documentation

  - [useWindowInfo](./src/useWindowInfo/README.md)
  - [WindowInfo](./src/WindowInfo/README.md)
  - [WindowInfo](./src/WindowInfo/README.md)
  - [WindowInfoProvider](./src/WindowInfoProvider/README.md)
  - [withWindowInfo](./src/withWindowInfo/README.md)

## Contribution

[Help us,](https://github.com/trouble/.github/blob/master/CONTRIBUTING.md) or let us [help you help us](https://github.com/trouble/.github/blob/master/SUPPORT.md).

## License

[MIT](https://github.com/trouble/react-window-info/blob/master/LICENSE) Copyright (c) TRBL, LLC
