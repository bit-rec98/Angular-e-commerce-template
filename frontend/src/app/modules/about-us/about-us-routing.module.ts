import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
    {
        /*Path built http://localhost:4200/about-us/ */
        path: '',
        component: AboutUsComponent,
    },
    {
        /*Path built http://localhost:4200/about-us/contact */
        path: 'contact',
        component: ContactComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AboutUsRoutingModule {}

/*
    *routes
    Constant for declaring sub-routes for module

    *@NgModule
    This decorator allows to import/export and declare rules for this specific module (about-us-routing.module.ts)

    *imports
    This property allows to provide declared routes to the module in order to make them usable for it

    *exports
    This property allows to export data outside this module

    *In module routing
    When adding routes within this module, that routes can be accessed as subroutes

*/
