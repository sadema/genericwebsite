import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'default-container',
  template: `
    <div *ngFor="let content of containerdata.content">
      <div generic-content [contentdata]="content"></div>
    </div>
  `,
  styleUrls: ['./default-container.component.css']
})
export class DefaultContainerComponent implements OnInit {
  // @HostBinding('attr.class') cssClass = 'mt-md-4 mb-md-4 pt-5 pb-5';
  static ref = 'DefaultContainer';

  @Input()
  public containerdata;

  constructor() { }

  ngOnInit() {
  }

}
