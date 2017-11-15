import {ComponentFactoryResolver, Directive, Input, ViewContainerRef} from '@angular/core';
import {ContentComponents} from "./content.module";
import {ContentService} from "./content.service";

@Directive({
  selector: '[generic-content]',
  providers: [ContentService]
})
export class GenericContentDirective {

  @Input()
  public contentdata;

  @Input()
  public metadata;

  constructor(
    private vcRef: ViewContainerRef,
    private cfResolver: ComponentFactoryResolver,
    private contentService: ContentService
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
        console.log(this.contentdata);
        component.instance['metadata'] = this.metadata;
        let constructedData = {"data": null, "img": null, "link": null};
        if (this.contentdata.img) {
          constructedData.img = this.contentdata.img;
        }
        if (this.contentdata.link) {
          constructedData.link = this.contentdata.link;
        }
        if (this.contentdata.contentitem) {
          this.contentService.getContent(this.contentdata.contentitem.contentlink).subscribe(data => {
            console.log(data);
            constructedData.data = data;
            component.instance['componentcontent'] = constructedData;
            // if (this.contentdata.img) {
            //   component.instance['componentcontent'] = {data: data, img: this.contentdata.img};
            // }
            // else {
            //   component.instance['componentcontent'] = {data: data};
            // }
          })
        }
        else {
          component.instance['componentcontent'] = constructedData;
        }
      }
    }
  }
}
