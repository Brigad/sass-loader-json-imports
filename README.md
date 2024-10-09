# sass-loader json imports

This repository aims to implement .json imports in sass-loader using `sass-embedded` (or `sass`).

## Installation

```bash
yarn
```

## Context

I have adapted the [node-sass-json-importer](https://github.com/pmowrer/node-sass-json-importer) module to match the `modern` API from `dart-sass` and `sass-embedded`.

## Reproduction

### `main` branch

When directly importing a `.json` file in `Test.module.scss`, things work as expected (we can inspect the content of `dist/bundle.js` and will find the correct `background-color`).
