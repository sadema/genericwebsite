import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'card',
  template: `
    <div class="card">
      <div class="card-block">
        <h4 class="card-title">{{componentcontent['card-title']}}</h4>
        <h6 class="card-subtitle mb-2 text-muted">{{componentcontent['card-subtitle']}}</h6>
        <p class="card-text">{{componentcontent['card-text']}}</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>
  `,
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  static ref = 'Card'

  @Input()
  public componentcontent;

  constructor() { }

  ngOnInit() {
    console.log(this.componentcontent);
  }

}
