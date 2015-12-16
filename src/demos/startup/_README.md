# src/app/startup
## index.html
Example of startup/landingpage setup that loads necessary dependencies and bootstraps an Angular2 application.

The main concept is that SystemJS is responsible for loading the Angular2 application by:
- packaging all .js files under the `/dist` folder which in this repository contains all compiled JS files. Separating the `.ts` and compiled `.js` is just a personal preference and is not required, nor is calling the output directory "dist" required. The created package will also be called "dist".
- loading the _module_ "boot" from the "dist" package. In ES6, a script _file_ is a _module_. A module name is just the script file's name without the ".js" extension, usually.

### Notes
TBA

### Resources
TBA
