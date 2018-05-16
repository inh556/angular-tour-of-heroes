# About thie practice
This practice is prepared for an angular project. 


# what are inside Module?
The import statement is used to import functionality from the existing modules. 

The NgModule decorator is used to later on define the imports, declarations, and bootstrapping options.

The BrowserModule is required by default for any web based angular application.

The bootstrap option tells Angular which Component to bootstrap in the application.
1. declarations 
2. exports
    This is used to export components, directives, and pipes which can then be used in other modules.
3. imports
    Just like the export array, the import array can be used to import the functionality from other Angular JS modules
4. provider
5. bootstrap
    This is used to tell Angular JS which components need to be loaded so that its functionality can be accessed in the application. Once you include the component in the bootstrap array, you need to declare them so that they can be used across other components in the Angular JS application.

# AngularTourOfHeros

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
