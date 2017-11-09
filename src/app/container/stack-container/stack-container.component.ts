import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'stack-container',
  template: `
    <div *ngFor="let content of containerdata.content">
      <div generic-content [contentdata]="content" [metadata]="content.metadata"></div>
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
    console.log(this.containerdata);
  }

}
