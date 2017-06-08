import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderContainerComponent} from "./header-container/header-container.component";
import {CardgroupContainerComponent} from "./cardgroup-container/cardgroup-container.component";
import { GenericContainerDirective } from './generic-container.directive';
import {ContentModule} from "../content/content.module";

export const ContainerComponents  = [
  HeaderContainerComponent,
  CardgroupContainerComponent
];

@NgModule({
  declarations: [
    ...ContainerComponents,
    GenericContainerDirective
  ],
  imports: [
    ContentModule,
    CommonModule,
  ],
  entryComponents: [
    ContainerComponents
  ],
  exports: [
    GenericContainerDirective
  ]
})
export class ContainerModule { }
