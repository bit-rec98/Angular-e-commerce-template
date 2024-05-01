import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import {provideAnimations} from '@angular/platform-browser/animations'

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), provideAnimations()]
};

/*
    *routing
    In Angular, routing allows to load specific components or modules when accesing routes like:
    - /home
    - /dashboard/menu

    Routes can be defined at app.routes.ts file
*/

/*
  *provider
  A provider in Angular is a set of instructions to the dependency injection system on how to obtain a value for a specific dependency
  It tells angular how to create or deliver an instance of a service or some other dependency
  When using a dependency (Like httpCLient), a provider for that dependency is needed
*/
