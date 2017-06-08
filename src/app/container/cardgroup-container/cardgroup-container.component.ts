import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'cardgroup-container',
  template: `
    <div class="card-deck">
      <div class="p-2" *ngFor="let content of containerdata.content">
        <div generic-content [contentdata]="content"></div>
      </div>
     </div>
  `,
  styleUrls: ['./cardgroup-container.component.css']
})
export class CardgroupContainerComponent implements OnInit {

  static ref = "CardgroupContainer";

  @Input()
  public containerdata;

  constructor() { }

  ngOnInit() {
  }

}
