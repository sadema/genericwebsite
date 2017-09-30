import {Component, OnInit} from '@angular/core';
import {AppService} from "./app.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  template: `
  <nav class="navbar navbar-toggleable-md navbar-inverse bg-navbar">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">Inspiratie voor jou!</a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item" *ngFor="let page of pagesObservable | async"><a class="nav-link" [routerLink]="page.value.url_id">{{page.value.text}}</a></li>
    </ul>
    </div>
  </nav>

    <div class="container-fluid p-0">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent implements OnInit {
	pagesObservable: Observable<any[]>;

	constructor(private appService:AppService) {
	}

	ngOnInit() {
	  this.pagesObservable = this.appService.pages;
  }
}
