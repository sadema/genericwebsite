import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';

import {FrontpageComponent} from './frontpage.component';
import {SubpageComponent} from './subpage.component';
import {SubpageSidebarComponent} from './subpage-sidebar.component';
import {ProductsPageComponent} from './products-page.component';

import {GenericPageDirective} from './generic-page.directive';
import {PageComponent} from './page.component';

import {PageResolve} from './page.resolve'

import {CommerceModule} from '../commerce/commerce.module';
import {SpotsModule} from '../spots/spots.module';
import { DefaultpageComponent } from './defaultpage/defaultpage.component';
import {ContentModule} from "../content/content.module";


export const PageComponents = [
  DefaultpageComponent,
];

export {PageComponent} from './page.component';

@NgModule({
	declarations:[
		GenericPageDirective,
		PageComponent,
		...PageComponents,
	],
	imports:[
    ContentModule,
		SharedModule,
		CommerceModule,
		SpotsModule
	],
	providers:[
		PageResolve
	],
	entryComponents:[
		PageComponents
	],
	exports:[
		PageComponent
	]
})
export class PagesModule {}

