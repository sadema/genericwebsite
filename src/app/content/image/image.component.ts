import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'image',
  template: `
    <img src="{{componentcontent.img.url}}" class="img-fluid" alt="{{componentcontent.img.alt}}">
    <div id="text">
      <h1>{{componentcontent.title}}</h1>
      <h2>{{componentcontent.subtitle}}</h2>
     </div>
  `,
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  static ref = 'image'

  @Input()
  public componentcontent;

  constructor() { }

  ngOnInit() {
    console.log(this.componentcontent);
  }

}
