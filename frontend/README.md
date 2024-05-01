# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

-------------------------------------------------------------

# Extra notes

## Modules
In older Angular versions, when generating a new project, it would be generated as a module by default (the main application files would be placed inside of a __module__ and all the imports/exports would be placed there as well)
- By default, modules are convenient if segmenting/separating the application into small parts is required
- Modules allow to organize the application into sections and this sections can have shared functionality.
E.g. Specific modules and packages may be imported into a specific module and that importings would only be accesible from within that module which imported them.
- App module (or standalone app)
![app module](image.png)
- When first accessing the app, all of the files are being loaded at the same time, which implies a quite long initial load. To avoid that, the web app can be segmented into modules and then use lazy loading techniques to only request specific parts of the app when they're necessary. 
![modules](image-1.png)

## Routing (Modules)
In a webapp, dedicated modules can have subroutes to navigate when the user is located inside of them. 
E.g. **domain/main-module-route/sub-route** 

