import { Directive, ViewContainerRef, ComponentFactoryResolver, Input } from '@angular/core';

import {PageComponents} from './pages.module';

@Directive({
	selector:'[generic-page]'
})
export class GenericPageDirective {

	@Input()
	public data;

	constructor(
		private vcRef: ViewContainerRef,
		private cfResolver: ComponentFactoryResolver
	) { }

	ngOnChanges(changes) {
		if(this.data) {
			this.vcRef.clear();
			const cf = this.cfResolver.resolveComponentFactory(PageComponents.find(component => component.ref === this.data.template));
			const component = this.vcRef.createComponent(cf);
			component.instance['pagecontent'] = this.data.pagecontent;
		}
	}
}
