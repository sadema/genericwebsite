import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { routing } from './app.routes';

import { AppComponent } from './app.component';

import {PagesModule} from './pages/pages.module';
import {SpotsModule} from './spots/spots.module';


import { CommerceModule } from './commerce/commerce.module';
import {AppService} from "./app.service";
import {PageContentService} from "./pages/page-content.service";
import {ContentModule} from "./content/content.module";
import {ContainerModule} from "./container/container.module";

@NgModule({
  declarations: [
  	AppComponent,
  ],
  imports: [
  	SharedModule,
  	routing,

  	PagesModule,
    ContainerModule,
    ContentModule,
  	SpotsModule,

  	CommerceModule
  ],
  providers: [
    AppService, PageContentService
  ]
})
export class AppModule {
}
export { AppComponent } from './app.component';
