import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jumbotron',
  template: `
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-3">Contact gegevens</h1>
        <p class="lead"><a href="mailto: m.v.marrewijk@xs4all.nl">Emailadres van Mariëtte van Marrewijk</a></p>
        <p class="lead"><a href="mailto: ragnageers@me.com">Emailadres van Ragna Geers</a></p>
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
