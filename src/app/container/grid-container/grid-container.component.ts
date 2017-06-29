import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'grid-container',
  template: `
      <div *ngFor="let col of containerdata.content" [style.flex]="col.content.metadata.flex" [ngClass]="col.content.metadata.class">
        <div generic-content [contentdata]="col"></div>
      </div>
  `,
  styleUrls: ['./grid-container.component.css']
})
export class GridContainerComponent implements OnInit {
  @HostBinding('attr.class') cssClass;

  public static ref:string = "GridContainer";

  @Input()
  public containerdata;

  constructor() { }

  ngOnInit() {
    console.log(this.containerdata);
    let justify_class:string = this.containerdata.metadata.center ? "center" : "";
    let grid_class: string = this.containerdata.metadata.class;
    this.cssClass = `${grid_class} ${justify_class}`;
  }

}
