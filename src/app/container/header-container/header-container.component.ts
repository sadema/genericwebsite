import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-header-container',
  template: `
      <div class="p-2" *ngFor="let content of containerdata.content">
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
