import { Directive, ViewContainerRef, ComponentFactoryResolver, Input } from '@angular/core';

import {Spots} from './spots.module';

@Directive({
	selector:'[generic-spot]'
})
export class GenericSpotDirective {

	@Input() 
	public spotType;

	@Input() 
	public spotData;

	constructor(
		private _vcRef: ViewContainerRef, 
		private _cfResolver: ComponentFactoryResolver
	) { }

	ngOnInit() {
		const cf = this._cfResolver.resolveComponentFactory(Spots.find(component => component.ref === this.spotType));
		const _component = this._vcRef.createComponent(cf);
		_component.instance['data'] = this.spotData;
	}
}