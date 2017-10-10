import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'stack-container',
  template: `
    <h1>Hello StackContainer</h1>
    {{containerdata.content | json}}
    <div *ngFor="let content of containerdata.content">
      {{content | json}}
      <div generic-content [contentdata]="content"></div>
    </div>

  `,
  styleUrls: ['./stack-container.component.css']
})
export class StackContainerComponent implements OnInit {
  static ref="stackContainer";

  @Input()
  public containerdata;

  constructor() { }

  ngOnInit() {
  }

}
