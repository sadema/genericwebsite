import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'defaultpage',
  template:`
<!--
    <div class="d-flex justify-content-sm-center justify-content-md-start flex-column flex-md-row" id="{{container.containername}}" *ngFor="let container of containers">
      <div class="p-2" *ngFor="let content of container.content">
        <div generic-content [contentdata]="content"></div>
      </div>
    </div> -->
    <div class="d-flex" *ngFor="let container of containers">
      <div generic-container [containerdata]="container"></div>
    </div>
  `,
  styleUrls: ['./defaultpage.component.css']
})
export class DefaultpageComponent implements OnInit {

  static ref = 'Defaultpage'

  @Input()
  public containers;

  constructor() { }

  ngOnInit() {
  }

}
