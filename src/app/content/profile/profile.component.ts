import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'profile',
  template: `
    <img src="{{componentcontent?.data['bg-img'].url}}" width="100%" alt="{{componentcontent?.data['bg-img'].alt}}">
    <div class="profile-content">
      <img class="profile-img" src="{{componentcontent?.data['img'].url}}" width="100%" alt="{{componentcontent?.data['img'].alt}}">
      <div class="h4 p-2">{{componentcontent?.data.title}}</div>
      <p class="p-2" [innerHTML]="textsubstring(componentcontent?.data?.text)"></p>
    </div>
    <!--
    <img src="{{componentcontent['profile-bg-img'].url}}" width="100%" alt="{{componentcontent['profile-bg-img'].alt}}">
    <div class="profile-content">
      <img class="profile-img" src="{{componentcontent['profile-img'].url}}" width="100%" alt="{{componentcontent['profile-img'].alt}}">
      <div class="h4 p-2">{{componentcontent.title}}</div>
      <p class="p-2">{{componentcontent.text}}</p>
    </div> -->
  `,
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  static ref:string = 'profile';

  @Input()
  public componentcontent;

  @Input()
  public metadata;

  constructor() { }

  ngOnInit() {
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
    let textmeta = this.metadata['text'];
    if (textmeta) {
      numberOfCharacters = textmeta.numberOfCharacters ? textmeta.numberOfCharacters : -1;
    }
    return numberOfCharacters;
  }
}
