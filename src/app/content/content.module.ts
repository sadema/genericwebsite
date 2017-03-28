import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import {GenericContentDirective} from "./generic-content.directive";

export const ContentComponents = [
  CardComponent,
  ];

@NgModule({
  declarations: [
    GenericContentDirective,
    ...ContentComponents
  ],
  imports: [
    CommonModule
  ],
  entryComponents:[
    ContentComponents
  ],
  exports: [
    GenericContentDirective
  ]
})
export class ContentModule { }
