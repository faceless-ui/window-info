# React Utilities

## Source Code

### Abstract

A collection of simple, useful utilities components that provide information and render null.

### Component Documentation

The source components in their raw form are found in the `src` directory. These are all batch exported from the top-level `index.js` so that they can be easily accessed via import.

[WindowInfo](/src/WindowInfo/README.md)
[MousePosition](/src/MousePosition/README.md)

## Environment

### Distribution

The entrypoint for the production bundle is `/dist/build.bundle.js`, as defined in `package.json`. Importing this project will return that bundle.

### Compilation and Transpilation

Generating this production bundle is defined in `webpack.production.config.js`, one of two custom webpack configurations defined at the top of this repo. It simply processes all of the `.js` files within the `src` directory through the `babel-loader` transpiler and into the `dist` directory.

  - tldr: `npm run build`.

### Development

The other webpack configuration is `webpack.development.config.js` which does a few things differently -- compilation happens from the `demo` directory as opposed to the `src` directory. It then will spin up `webpack-dev-server`, which serves a compiled and transpiled build _in memory_, with hot-reloading enabled.

  - tldr: `npm run dev`.
