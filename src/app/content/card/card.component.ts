import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  static ref = 'Card'

  @Input()
  public content;

  constructor() { }

  ngOnInit() {
  }

}
