import {Directive, Input, ComponentFactoryResolver, ViewContainerRef} from '@angular/core';
import {ContainerComponents} from "./container.module";

@Directive({
  selector: '[generic-container]'
})
export class GenericContainerDirective {

  @Input()
  public containerdata;

  constructor(private vcRef: ViewContainerRef, private cfResolver: ComponentFactoryResolver) { }

  ngOnChanges(changes) {
    console.log("generic container change");
    if (this.containerdata) {
      this.vcRef.clear();
      const cf = this.cfResolver.resolveComponentFactory(ContainerComponents.find(containercomponent => containercomponent.ref === this.containerdata.ref));
      const component = this.vcRef.createComponent(cf);
      component.instance['containerdata'] = this.containerdata;
    }
  }
}
