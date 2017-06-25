import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderContainerComponent} from "./header-container/header-container.component";
import {CardgroupContainerComponent} from "./cardgroup-container/cardgroup-container.component";
import { GenericContainerDirective } from './generic-container.directive';
import {ContentModule} from "../content/content.module";
import {DefaultContainerComponent} from "./default-container/default-container.component";
import { GridContainerComponent } from './grid-container/grid-container.component';

export const ContainerComponents  = [
  HeaderContainerComponent,
  CardgroupContainerComponent,
  DefaultContainerComponent,
  GridContainerComponent,
];

@NgModule({
  declarations: [
    ...ContainerComponents,
    GenericContainerDirective,
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
