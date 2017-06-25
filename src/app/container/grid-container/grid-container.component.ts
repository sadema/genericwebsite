import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'grid-container',
  template: `
    <div class="row">
      <div *ngFor="let col of containerdata.metadata.cols; let index = index" class="{{col.class}}">
        <div generic-content [contentdata]="containerdata.content[index]"></div>
      </div>
    </div>
  `,
  styleUrls: ['./grid-container.component.css']
})
export class GridContainerComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'container-fluid';

  public static ref:string = "GridContainer";

  @Input()
  public containerdata;

  constructor() { }

  ngOnInit() {
    console.log(this.containerdata);
  }

}
