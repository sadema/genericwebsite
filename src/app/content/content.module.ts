import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import {GenericContentDirective} from "./generic-content.directive";
import { ImageComponent } from './image/image.component';
import { TextComponent } from './text/text.component';
import { ProfileComponent } from './profile/profile.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { DefaultComponent } from './default/default.component';

export const ContentComponents = [
  DefaultComponent,
  CardComponent,
  ImageComponent,
  TextComponent,
  ProfileComponent,
  JumbotronComponent
  ];

@NgModule({
  declarations: [
    GenericContentDirective,
    ...ContentComponents,
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
