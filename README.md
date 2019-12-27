[![NPM](https://img.shields.io/npm/v/@trbl/react-window-info)](https://www.npmjs.com/@trbl/react-window-info)
![Bundle Size](https://img.shields.io/bundlephobia/minzip/@trbl/react-window-info?label=zipped)
[![Supported by TRBL](https://img.shields.io/badge/supported_by-TRBL-black)](https://github.com/trouble)

# React Window Info

The window, not Windows.

## Quick Start

### Installation

```bash
$ yarn add @trbl/react-window-info
```

### Composition

```jsx
  import React from 'react';
  import { WindowInfoProvider, withWindowInfo } from '@trbl/react-window-info';

  const MyComponent = withWindowInfo(() => return <div>My Component</div>);

  const App = () => {
    return (
      <WindowInfoProvider>
        <MyComponent>
          ...
        </MyComponent>
      </WindowInfoProvider>
    )
  }

  export default App;
```

## Demo

To demo locally, clone the repo and

```bash
$ yarn
$ yarn dev
$ open http://localhost:3000
```

## Documentation

All available props can be found via the references below:

  - [WindowInfoProvider](/src/WindowInfoProvider/README.md)
  - [withWindowInfo](/src/withWindowInfo/README.md)

## Contribution

[Help us,](https://github.com/trouble/.github/blob/master/CONTRIBUTING.md) or let us [help you help us](https://github.com/trouble/.github/blob/master/SUPPORT.md).

## License

[MIT](https://github.com/trouble/react-window-info/blob/master/LICENSE) Copyright (c) TRBL, LLC
