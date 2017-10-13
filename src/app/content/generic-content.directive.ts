import {Directive, Input, ComponentFactoryResolver, ViewContainerRef} from '@angular/core';
import {ContentComponents} from "./content.module";
import {ContentService} from "./content.service";
import {Observable} from "rxjs/Observable";

@Directive({
  selector: '[generic-content]',
  providers: [ContentService]
})
export class GenericContentDirective {

  @Input()
  public contentdata;

  constructor(
    private vcRef: ViewContainerRef,
    private cfResolver: ComponentFactoryResolver,
    private contentService: ContentService
  ) { }

  ngOnChanges(changes) {
    console.log("generic content change");
//    console.log(this.contentdata);
    if(this.contentdata) {
      this.vcRef.clear();
      const cf = this.cfResolver.resolveComponentFactory(ContentComponents.find(contentcomponent => contentcomponent.ref === this.contentdata.contenttype));
      const component = this.vcRef.createComponent(cf);
      if (typeof(this.contentdata.content) !== 'undefined') {   // TODO Sjoerd: oude structuur. Verwijderen na conversie
        component.instance['componentcontent'] = this.contentdata.content;
      }
      else {
        console.log(this.contentdata);
        this.contentService.getContent(this.contentdata.contentitem.contentlink).subscribe(data => {
          component.instance['componentcontent'] = data;
        })
      }
    }
  }
}
