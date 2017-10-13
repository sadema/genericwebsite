import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'default',
  template: `
    {{componentcontent?.content | json}}
    <!--
    <div class="mb-md-4 pt-5 pb-5" [ngClass]="{'bg-faded': defaultdata?.metadata?.faded}">
    <h1>Default content</h1>
    {{componentcontent | async | json}}
    {{defaultdata?.title}}
    </div> -->
  `,
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  static ref: string = "default";

  @Input()
  public componentcontent;

  public defaultdata;

  constructor() { }

  ngOnInit() {
    console.log(this.componentcontent);
    // this.componentcontent.subscribe(data => {
    //   this.defaultdata = data;
    //   console.log(this.defaultdata)
    // })
  }

}
