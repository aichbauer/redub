# Redub
#### a react *REDU*x *B*oilerplate

## install & use
> cd into root directory
```shell
$ npm install
```
> run this for to copy index.html to dist and to bundle javascript and load to dist/js
```shell
$ npm run dev
```
> run this for serving the index.html and the bundle.js on localhost:3000
```shell
$ npm run start
```

## Folder Structure
```
.
+-- src
|   +-- config
|   |
|   +-- js
|   |   +-- actions
|   |   +-- components
|   |   +-- conainers
|   |   +-- reducers
|   |   +-- views
|   |   app.js
|   |
|   +-- scss
|   |
|   index.html
|
.babel.rc
.gitignore
package.json
readme.md
webpack.config.js

```

## src directory

Inside here is the code for the complete redux application.

It holdes the following files & folders:
* **config:**     for now it only holdes the configuration for the API routes
* **js:**         basically is the redux application
* **scss:**       holdes the stylesheets for the application
* **index.html:** is the only html file you need

## config directory

Inside here all the configurations are set.

It holds the following files & folders:
* **apiRoutes.js:** this file configures the url-path to the api

## js directory

Inside here is all the javascript code for the redux application.

It holds the following files & folders:
* **actions:** the complete logic of the redux application
* **components:** the *dumb* just presentational components of the application (rarely have a state)
* **conainers:** the *intelligent* conainer components (often statefull components)
* **reducers:** the complete statemanagement for the redux application
* **views:** the different views that are displayed to the user. Can consist of multiple components and/or containers
* **app.js:** the entrypoint for the application

## scss directory

Inside here is all the scss code for the redux application.

It holdes the following files & folders:
* **style.scss:** the scss code for the redux application

## index.html

This is the only html file you need for the redux application.
It holds a div with an id 'root' (here will the application render) and a script with the src 'js/bundle.js' which is the webpacked js code for the redux application.


## Dependencies

* **axios:** promise based HTTP client for the browser and node.js
* **babel-polyfill:** for backwards compatibility, so that ES2015 APIs are available in older browsers
* **react:** library for building user interfaces
* **react-dom:** package for working with the DOM
* **react-redux:** official React bindings for Redux
* **react-router:** routing library for react
* **react-redux-router:** ruthlessly simple bindings to keep react-router and redux in sync
* **redux:** predictable state container for javascript apps
* **redux-thunk:** the thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met


```json
"dependencies": {

    "axios": "^0.15.3",
    "babel-polyfill": "^6.20.0",
    "react": "^15.4.1",
    "react-dom": "^15.4.1",
    "react-redux": "^5.0.1",
    "react-router": "^3.0.0",
    "react-router-redux": "^4.0.7",
    "redux": "^3.6.0",
    "redux-thunk": "^2.1.0"

  },
```

## Developer Dependencies

* **babel-core:** babel compiler, to use es6 and jsx
* **babel-loader:** babel loader module for webpack, depends on babel-core
* **babel-preset-es2015:** babel preset for all es2015 plugins
* **babel-preset-react:** babel preset for all React plugins
* **copy-webpack-plugin:** copy files and directories in webpack
* **css-loader:** css loader module for webpack
* **node-sass:** is nessacary for sass-loder
* **sass-loader:** sass loader module for webpack, depends on node-sass
* **style-loader:** style loader module for webpack
* **webpack:** Packs CommonJs/AMD modules for the browser. Allows to split the codebase into multiple bundles, which can be loaded on demand. Support loaders to preprocess files, i.e. json, jade, coffee, css, less, ... and the custom stuff.
* **webpack-dev-server:** serves a webpack app, updates the browser on changes

```json
  "devDependencies": {

    "babel-core": "^6.21.0",
    "babel-loader": "^6.2.10",
    "babel-preset-es2015": "^6.18.0",
    "babel-preset-react": "^6.16.0",
    "copy-webpack-plugin": "^4.0.1",
    "css-loader": "^0.26.1",
    "node-sass": "^4.1.1",
    "sass-loader": "^4.1.1",
    "style-loader": "^0.13.1",
    "webpack": "^1.14.0",
    "webpack-dev-server": "^1.16.2"

  }
```

## webpack

* serves files from "./dist" on localhost:3000
* entry point for bundeling is "./src/js/app.js"
* outputs in "./dist/js" directory and renames the bundle to app.bundle.js
* module: transpiles es6 and react jsx in es2015 via babel
* module: transpiles sass; loads css, inline-styles and sass that was imported in js via "require('./example.scss')"
* plugin: loads the index.html from "./src" to "./dist"

```js
var CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {

  devServer: {

    inline: true,
    contentBase: './dist',
    port: 3000

  },
  entry: './src/js/app.js',
  output: {

    path: './dist',
    filename: 'js/app.bundle.js'

  },
  module: {

    loaders: [

      {

        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel']

      },
      {

        test: /\.scss$/,
        loader: ['style-loader', 'css-loader', 'sass-loader']

      }

    ]

  },
  plugins: [

    new CopyWebpackPlugin([

      {

        from: 'src/index.html'

      }

    ])

  ]

};
```