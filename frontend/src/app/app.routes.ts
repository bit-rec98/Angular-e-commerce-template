import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about-us',
        loadChildren: () => import('./modules/about-us/about-us.module').then((e) => e.AboutUsModule)
    }
];

/*
    *routes
    In this file, routes can be defined to use them when bootstrapping (loading/starting) the application
*/
