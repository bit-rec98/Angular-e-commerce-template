import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AboutUsComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule
  ],
  exports: [],
  providers: []
})
export class AboutUsModule { }

/*
    *AboutUsRoutingModule
    To be able to use routing, it's necessary to import the routing module for the custom specific generated module (about-us-routing.module.ts)

    *imports
    This property is used to tell module what is going to be used while this module is active. All components inside of this module (@NgModule) will be able to use anything inside of the imports array. Usually at imports there's declared the modules to use

    *exports
    This array is used to export specific components of the module to make them accesible to other modules

    *CommonModule
    Since it's added at imports in this module, all of the components which are declared within the module (at declarations) will be able to use the CommonModule as well (As well as all other imports which may be added)

    *declarations
    Here there's usually the components which are residing within the module

    *providers
    At this array, specific services can be declared due to many components rely on them
    E.g. ConfirmationServices

    *Routing
    This components has to have a route created at the app.routes.ts file in order to make it usable

*/
