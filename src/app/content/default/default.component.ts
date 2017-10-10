import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'default',
  template: `
    <h1>Default content</h1>
    {{componentcontent | json}}
  `,
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  static ref: string = "default";

  @Input()
  public componentcontent;

  constructor() { }

  ngOnInit() {
    console.log(this.componentcontent);
  }

}
