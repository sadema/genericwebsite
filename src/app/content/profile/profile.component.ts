import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'profile',
  template: `
    <img src="{{componentcontent['profile-bg-img'].url}}" width="100%" alt="{{componentcontent['profile-bg-img'].alt}}">
    <div class="profile-content">
      <img class="profile-img" src="{{componentcontent['profile-img'].url}}" width="100%" alt="{{componentcontent['profile-img'].alt}}">
      <div class="h4 p-2">{{componentcontent.title}}</div>
      <p class="p-2">{{componentcontent.text}}</p>
    </div>
  `,
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  static ref:string = 'Profile';

  @Input()
  public componentcontent;

  constructor() { }

  ngOnInit() {
  }

}
