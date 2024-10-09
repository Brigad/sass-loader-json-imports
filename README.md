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

### `2-nested-imports` branch

[Changes](https://github.com/Brigad/sass-loader-json-imports/pull/1)

When importing a `.json` file from a `.module.scss` file, our `importer` is never called for the `.json` file. Thus, we get the following error:

```
ERROR in ./src/Test.module.scss (./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/Test.module.scss)
Module build failed (from ./node_modules/sass-loader/dist/cjs.js):
Can't find stylesheet to import.
  ╷
1 │ @import "tokens/colors.json";
  │         ^^^^^^^^^^^^^^^^^^^^
  ╵
  ../../../../src/styles/_colors.module.scss 1:9  @import
  ../../../../src/Test.module.scss 1:9            root stylesheet
 @ ./src/Test.module.scss 8:6-202 20:17-24 24:0-172 24:0-172 25:22-29 25:33-47 25:50-64
 @ ./src/index.js 1:0-40
```
