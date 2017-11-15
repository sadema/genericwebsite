import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jumbotron',
  template: `
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-3">Contact gegevens</h1>
        <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
      </div>
    </div>
  `,
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

  static ref:string = "jumbotron";

  constructor() { }

  ngOnInit() {
  }

}
