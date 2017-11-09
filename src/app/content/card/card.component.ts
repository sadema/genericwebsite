import {Component, OnInit, Input} from '@angular/core';
import {Subject} from "rxjs/Subject";

@Component({
  selector: 'card',
  template: `
    <img *ngIf="componentcontent.img?.url" class="card-img-top" src="{{componentcontent.img?.url}}" alt="{{componentcontent.img?.alt}}">
    <div class="card-block">
      <h4 class="card-title">{{componentcontent.data?.title}}</h4>
      <h6 class="card-subtitle mb-2 text-muted">{{componentcontent.data?.subtitle}}</h6>
      <p class="card-text" [innerHTML]="textsubstring(componentcontent.data?.text)"></p>
      <!--
      <h4 class="card-title">{{componentcontent['card-title']}}</h4>
      <h6 class="card-subtitle mb-2 text-muted">{{componentcontent['card-subtitle']}}</h6>
      <p class="card-text">{{componentcontent['card-text']}}</p> -->

      <a href="#" class="card-link">Lees meer</a>
      <!-- <a href="#" class="card-link">Another link</a> -->
    </div>
  `,
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  static ref: string = 'card';

  @Input()
  public componentcontent: Subject<any> = new Subject();

  @Input()
  public metadata;

  private img: image; // = { url: "", alt: ""}

  constructor() {
  }

  ngOnInit() {
    console.log(this.componentcontent);

    this.img = this.componentcontent['card-img'];
// {
//       this.img.url = this.componentcontent['card-img'].url;
//       this.img.alt = this.componentcontent['card-img'].alt;
//     }
  }

  textsubstring(textArr: Array<Object>): string {
    let subtext: string = "";
    if (textArr) {
      textArr.forEach(text => {
        subtext = subtext.concat(text['paragraph'], " ");
      });
      let numberOfCharacters = this.textSize;
      if (numberOfCharacters !== -1) {
        subtext = subtext.substring(0, numberOfCharacters).concat(" .... ");
      }
    }
    return subtext;
  }

  private get textSize(): number {
    let numberOfCharacters: number = -1;
    let cardtextmeta = this.metadata['card-text'];
    if (cardtextmeta) {
      numberOfCharacters = cardtextmeta.numberOfCharacters ? cardtextmeta.numberOfCharacters : -1;
    }
    return numberOfCharacters;
  }
}
