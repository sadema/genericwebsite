import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'grid-container',
  template: `
      <div *ngFor="let col of containerdata.content" [style.flex]="col.content.metadata.flex" [ngClass]="{'bg-faded': col.content.metadata.faded}">
        <div generic-content [contentdata]="col"></div>
      </div>
  `,
  styleUrls: ['./grid-container.component.css']
})
export class GridContainerComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'd-flex pl-3 pr-3 mt-5 mb-5';

  public static ref:string = "GridContainer";

  @Input()
  public containerdata;

  constructor() { }

  ngOnInit() {
    console.log(this.containerdata);
  }

}
