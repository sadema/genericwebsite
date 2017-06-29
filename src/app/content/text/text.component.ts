import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'text',
  template: `
    <div class="mb-md-4 pt-5 pb-5" [ngClass]="{'bg-faded': componentcontent.metadata.faded}">
    <div class="pl-3 pr-3">
    <h1>{{componentcontent.title}}</h1>
    <h4 class="pt-2 pb-2">{{componentcontent.subtitle}}</h4>
    <p [innerHTML]="componentcontent.text"></p>
    </div>
    <img *ngIf="img?.url" class="img-fluid" src="{{img.url}}" alt="{{img.alt}}">
    </div>
  `,
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'text-center';
  static ref: string = 'Text';

  @Input()
  public componentcontent;

  private img:image;

  constructor() { }

  ngOnInit() {
    console.log(this.componentcontent);
    this.img = this.componentcontent['img'];
  }

}
