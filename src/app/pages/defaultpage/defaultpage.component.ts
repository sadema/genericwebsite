import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'defaultpage',
  template:`
    <div *ngFor="let container of containers">
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
