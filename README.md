# webpack-typescript-postcss-universal-starter

<p>Simple, well-structured, modern boilerplate for Angular2 projects</p>
<br/><br/>

## When to use

This is a great choice if you want to:

1. Start coding in Angular 2 immediately
2. Configure testing and authorization by yourself or not to use them
3. Experiment with Webpack configuration
4. Avoid complex project structure and unnecessary dependencies
<br/><br/>

## Main features

1. [Angular 2.4.8](https://angular.io/) - JS framework
1. [Webpack 2.1.0](https://webpack.js.org/) as a module bundler
2. [TypeScript 2.1.6](https://www.typescriptlang.org/) - typed superset of JavaScript
3. [PostCSS](http://postcss.org/) - to enable awesome future CSS features, automatically add vendor prefixes,
minify and optimize your CSS files (among others)<br/><br/>
Plugins used:
 * [cssnext](http://cssnext.io/)
 * [css-mqpacker](http://cssnext.io/)
 <br/><br/>
4. [Webpack Dev Server 2.1.0](https://github.com/webpack/webpack-dev-server) - to enable live-reloading and provide fast in-memory access to the webpack assets
5. [TSLint 4.4.2](https://palantir.github.io/tslint/) as a linter for the TypeScript
6. [Bootstrap 3.3.7](http://getbootstrap.com/) (as an example how to load third-party libraries, check out [Installation guide](#installation) to easily remove it from your project)
<br/><br/>

## Getting started

### Installation

1. ```fork``` this repository
2. ```git clone``` your fork
3. Run ```npm  i``` in your project root

##### * Removing Bootstrap
1. Remove ```import 'bootstrap/dist/css/bootstrap.css'``` from ```./src/vendor.ts``` file
2. Run ```npm uninstall boostrap --save```


### Usage
1. ```npm start``` to start development server
2. Open your browser on ```http://localhost:3000```
3. ```npm run build``` to bundle files into ```./build``` directory
<br/><br/>

## Project structure
```
.
├── src                                     # source files
│   ├── app                                 # folder for your app
│   │   ├── core                            # AppModule used in bootstrap, app routes
│   │   ├── shared_module                   # Shared module - put here components, directives and pipes available across the whole application
│   │   ├── feature_modules                 # Feature modules, each of them includes its own components, directives, pipes, services and models
│   │   └── global_styles                   # Global styles of your app
│   ├── boot.ts                             # file for bootstraping application
│   ├── vendor.ts                           # file for for loading 3rd party code
│   └── index.html
├── build                                   # compiled files
│   ├── js
│   ├── css
│   ├── media
│   └── index.html
├── webpack.dev.js                          # webpack configuration file for development
├── webpack.prod.js                         # webpack configuration file for production
├── postcss.config.js                       # PostCSS config file
├── tsconfig.json                           # TypeScript configuration
├── tslint.json                             # TSLint rules
.
.
.
```
<br/><br/>

## License
MIT
<br/><br/>

## Author

* Dominik Broj
