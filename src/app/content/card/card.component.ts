import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'card',
  template: `
    <img *ngIf="img.url" class="card-img-top" src="{{img.url}}" alt="{{img.alt}}">
      <div class="card-block">
        <h4 class="card-title">{{componentcontent['cad-title']}}</h4>
        <h6 class="card-subtitle mb-2 text-muted">{{componentcontent['card-subtitle']}}</h6>
        <p class="card-text">{{componentcontent['card-text']}}</p>
        <!-- <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a> -->
      </div>
  `,
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  static ref:string = 'Card'

  @Input()
  public componentcontent;

  private img: image; // = { url: "", alt: ""}

  constructor() { }

  ngOnInit() {
    console.log(this.componentcontent);
    this.img = this.componentcontent['card-img'];
// {
//       this.img.url = this.componentcontent['card-img'].url;
//       this.img.alt = this.componentcontent['card-img'].alt;
//     }
  }

}
