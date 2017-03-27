import { Component, Input } from '@angular/core';

@Component({
	selector:'frontpage',
	template:`
		<h1>{{data.header}}</h1>
		<img [src]="data.heroImage" alt="" />

		<div class="content">
			<div class="full">
				<spots [spots]="data.spots"></spots>
			</div>
		</div>
	`
})
export class FrontpageComponent {
	@Input() 
	public data;

	static ref = 'Frontpage'

}