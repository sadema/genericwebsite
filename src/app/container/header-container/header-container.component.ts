import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'header-container',
  template: `
      <div class="p-0" *ngFor="let content of containerdata.content">
        <div generic-content [contentdata]="content"></div>
      </div>
  `,
  styleUrls: ['./header-container.component.css']
})
export class HeaderContainerComponent implements OnInit {

  static ref = "HeaderContainer";

  @Input()
  public containerdata;

  constructor() { }

  ngOnInit() {
  }

}
