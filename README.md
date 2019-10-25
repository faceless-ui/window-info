# React Utilities ![Beta](https://img.shields.io/badge/release-alpha-ff4553)

## Abstract

A collection of simple, useful utilities components that provide information and render no DOM of their own.

## Component Composition

```jsx
  <MousePositionProvider
    throttle={50}
  >
    ...
  </MousePositionProvider>

  <ScrollPositionProvider
    throttle={50}
  >
    ...
  </ScrollPositionProvider>

  <WindowInfoProvider
    throttle={50}
    breakpoints={{
      xs: 350,
      s: 576,
      m: 768,
      l: 992,
      xl: 1200,
    }}
  >
    ...
  </WindowInfoProvider>
```

## Component Documentation

The source components in their raw form are found in the `src` directory. These are all batch exported from the top-level `index.js` so that they can be easily accessed via import.

  - [MousePositionProvider](/src/MousePosition/README.md)
  - [withMousePosition](/src/MousePosition/README.md)
  - [ScrollPositionProvider](/src/ScrollPosition/README.md)
  - [withScrollPosition](/src/ScrollPosition/README.md)
  - [WindowInfoProvider](/src/WindowInfo/README.md)
  - [withWindowInfo](/src/WindowInfo/README.md)

## Environment

### Distribution

The entrypoint for the production bundle is `/dist/build.bundle.js`, as defined in `package.json`. Importing this project will return that bundle.

### Compilation and Transpilation

Generating this production bundle is defined in `webpack.production.config.js`, one of two custom webpack configurations defined at the top of this repo. It simply processes all of the `.js` files within the `src` directory through the `babel-loader` transpiler and into the `dist` directory.

  - tldr: `npm run build`

### Development

The other webpack configuration is `webpack.development.config.js` which does a few things differently -- compilation happens from the `demo` directory as opposed to the `src` directory. It then will spin up `webpack-dev-server`, which serves a compiled and transpiled build _in memory_, with hot-reloading enabled.

  - tldr: `npm run dev`
