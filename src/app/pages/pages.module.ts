import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';

import {GenericPageDirective} from './generic-page.directive';
import {PageComponent} from './page.component';

import {PageResolve} from './page.resolve'

import {CommerceModule} from '../commerce/commerce.module';
import {SpotsModule} from '../spots/spots.module';
import { DefaultpageComponent } from './defaultpage/defaultpage.component';
import {ContentModule} from "../content/content.module";
import {ContainerModule} from "../container/container.module";


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
    ContainerModule,
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

