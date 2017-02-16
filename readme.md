# Redub
#### a react *REDU*x *B*oilerplate

# recommended usage

with `redub-cli`

```shell
# installation
$ npm i -g redub-cli

# create anew project
$ redub new testProject

# generate a new component
$ redub generate comp myNewComponent
```


Documentation for redub-cli [click here](https://github.com/rudolfsonjunior/redub-cli/readme.md)

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