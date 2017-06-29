import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'default-container',
  template: `
    <div *ngFor="let content of containerdata.content">
      <div generic-content [contentdata]="content"></div>
    </div>
  `,
  styleUrls: ['./default-container.component.css']
})
export class DefaultContainerComponent implements OnInit {
  @HostBinding('attr.class') cssClass;
  static ref = 'DefaultContainer';

  @Input()
  public containerdata;

  constructor() { }

  ngOnInit() {
    let container_class: string = this.containerdata.metadata.class;
    let justify_class:string = this.containerdata.metadata.justify;
    this.cssClass = `${container_class} ${justify_class}`;
  }

}
