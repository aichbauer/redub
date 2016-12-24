# Redub
#### a react redux boilerplate
# not ready for use

## install & use
> cd into root directory
```shell
$ npm install
```
> run this for to copy index.html to dist and to bundle javascript and load to dist/js
```shell
$ npm run dev
```



## Dependencies

* react: core-dependency, library for building user interfaces.
* react-dom: core-dependency, package for working with the DOM.
* react-redux: core-dependency, official React bindings for Redux
* redux: core-dependency, predictable state container for javascript apps.
* babel-polyfill: for backwards compatibility, so that ES2015 APIs are available in older browsers
* react-router: routing library for react.
* react-redux-router: ruthlessly simple bindings to keep react-router and redux in sync.
* redux-thunk: the thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.


```json
"dependencies": {
    "babel-polyfill": "^6.20.0",
    "react": "^15.4.1",
    "react-dom": "^15.4.1",
    "react-redux": "^5.0.1",
    "react-router": "^3.0.0",
    "react-router-redux": "^4.0.7",
    "redux": "^3.6.0",
    "redux-thunk": "^2.1.0"
  }
```

## Developer Dependencies

* babel-core: babel compiler, to use es6 and jsx
* babel-loader: babel loader module for webpack, depends on babel-core
* babel-preset-es2015: babel preset for all es2015 plugins.
* babel-preset-react: babel preset for all React plugins.
* css-loader: css loader module for webpack
* node-sass: is nessacary for sass-loder
* sass-loader: sass loader module for webpack, depends on node-sass
* style-loader: style loader module for webpack
* webpack: Packs CommonJs/AMD modules for the browser. Allows to split your codebase into multiple bundles, which can be loaded on demand. Support loaders to preprocess files, i.e. json, jade, coffee, css, less, ... and your custom stuff.

```json
  "devDependencies": {
		"babel-core": "^6.21.0",
    "babel-loader": "^6.2.10",
    "babel-preset-es2015": "^6.18.0",
    "babel-preset-react": "^6.16.0",
    "css-loader": "^0.26.1",
    "node-sass": "^4.1.1",
    "sass-loader": "^4.1.1",
    "style-loader": "^0.13.1",
    "webpack": "^1.14.0"
  }
```