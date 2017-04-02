import {Component, OnInit} from '@angular/core';
import {AppService} from "./app.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  template: `
<!--
		<ul class="navigation">
			<li *ngFor="let page of pages"><a [routerLink]="page.link">{{page.text}}</a></li>
		</ul> -->

		<ul class="nav justify-content-center">
		  <li class="nav-item" *ngFor="let page of pagesObservable | async"><a class="nav-link" [routerLink]="page.id">{{page.value.text}}</a></li>
    </ul>
    
    <div class="container-fluid">
		  <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent implements OnInit {
	pages:any[];
	pagesObservable: Observable<any[]>;

	constructor(private appService:AppService) {
		this.pages = pages;
	}

	ngOnInit() {
	  this.pagesObservable = this.appService.pages;
      // .subscribe((pages) => {
	   //    console.log(pages);
      // });
  }
}

export const pages = [{
		text:'Forside',
		link:'bICCgfCphK'
	},{
		text:'Underside 1',
		link:'bNWdVLeJOW'
	},{
		text:'Underside 2',
		link:'coDQrWQZxK'
	},{
		text:'Produkter',
		link:'bUGgYdIhQi'
	}];
