import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterState, Params } from '@angular/router';

import { PageResolve } from './page.resolve';

@Component({
	template:`
		<div generic-page [pagedata]="pageData"></div>
	`
})
export class PageComponent {

	public pageData:any;

	constructor(private activatedRoute: ActivatedRoute,
				private pageResolve: PageResolve
			) { }

	ngOnInit() {
    console.log("ngOnInit", this.activatedRoute.url);
		this.activatedRoute.url
			.filter(url => url.length>0)
			.switchMap((urlseg) => {
				return this.pageResolve.resolveUrlSegment(urlseg);
			})
			.subscribe(data => {
				this.pageData = data;
			//	document.title = this.pageData.title + ' - NG2 spa-POC';
			});

	}
}
