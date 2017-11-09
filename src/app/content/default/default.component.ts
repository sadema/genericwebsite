import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {map} from "rxjs/operator/map";
import {Subject} from "rxjs/Subject";

@Component({
  selector: 'default',
  template: `
    <div class="mb-md-4 pt-5 pb-5" [ngClass]="{'bg-faded': metadata?.faded}">
      <div class="pl-3 pr-3">
        <h1>{{componentcontent.data?.title}}</h1>
        <h4 class="pt-2 pb-2">{{componentcontent.data?.subtitle}}</h4>
        <p *ngFor="let text of componentcontent.data?.text" [innerHTML]="text.paragraph"></p>
      </div>
    </div>
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
  @HostBinding('attr.class') cssClass = 'text-center';

  static ref: string = "default";

  @Input()
  public componentcontent: Subject<any> = new Subject();

  @Input()
  public metadata;

  public defaultdata;

  constructor() { }

  ngOnInit() {
    console.log(this.componentcontent);
    // this.componentcontent.subscribe(data => {
    //   this.defaultdata = data;
    //   console.log(`data: ${data}`)
    // })
  }

}
