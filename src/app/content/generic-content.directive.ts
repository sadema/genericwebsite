import {Directive, Input, ComponentFactoryResolver, ViewContainerRef} from '@angular/core';
import {ContentComponents} from "./content.module";

@Directive({
  selector: '[generic-content]'
})
export class GenericContentDirective {

  @Input()
  public contentdata;

  constructor(
    private vcRef: ViewContainerRef,
    private cfResolver: ComponentFactoryResolver
  ) { }

  ngOnChanges(changes) {
    console.log("generic content change");
    if(this.contentdata) {
      this.vcRef.clear();
      const cf = this.cfResolver.resolveComponentFactory(ContentComponents.find(contentcomponent => contentcomponent.ref === this.contentdata.contenttype));
      const component = this.vcRef.createComponent(cf);
      if (typeof(this.contentdata.content) !== 'undefined') {   // TODO Sjoerd: oude structuur. Verwijderen na conversie
        component.instance['componentcontent'] = this.contentdata.content;
      }
      else {
        component.instance['componentcontent'] = this.contentdata.contentitem;
      }
    }
  }
}
