import { Component, Input } from '@angular/core';

@Component({
	selector:'subpage-sidebar',
	template:`
		<h1>{{data.header}}</h1>

		<div class="content">
			<div class="narrow">
				<spots [spots]="data.spots"></spots>
			</div>
			<div class="side">
				<h5>Im a sidebar</h5>
				<spots [spots]="data.sidebarSpots"></spots>
			</div>
		</div>
	`
})
export class SubpageSidebarComponent {
	@Input() 
	public data;

	static ref = 'Subpage-sidebar';

}