import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'defaultpage',
  template:`
    <h1>Test</h1>
    <div *ngFor="let content of pagecontent">
      <div>{{content | json}}</div>
      <div generic-content [contentdata]="content"></div>
    </div>
  `,
  styleUrls: ['./defaultpage.component.css']
})
export class DefaultpageComponent implements OnInit {

  static ref = 'Defaultpage'

  @Input()
  public pagecontent;

  constructor() { }

  ngOnInit() {
  }

}
