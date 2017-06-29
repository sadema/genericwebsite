import {Component, OnInit, Input, HostBinding} from '@angular/core';

@Component({
  selector: 'cardgroup-container',
  template: `
      <div class="card" *ngFor="let content of containerdata.content">
        <div generic-content [contentdata]="content"></div>
      </div>
  `,
  styleUrls: ['./cardgroup-container.component.css']
})
export class CardgroupContainerComponent implements OnInit {
  @HostBinding('attr.class') cssClass:string;
  static ref = "CardgroupContainer";

  @Input()
  public containerdata;

  constructor() { }

  ngOnInit() {
    this.cssClass = this.containerdata.metadata.class;
  }

}
