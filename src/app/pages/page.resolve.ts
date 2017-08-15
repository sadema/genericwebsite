import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

import {CacheService} from '../shared/cache.service';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';
import {environment} from "../../environments/environment";

@Injectable()
export class PageResolve implements Resolve<any> {

  constructor(private http: Http, private cacheService: CacheService) { }

  public resolveUrl(url:string) {
    console.log(`Resolve url: ${url}`);
    let page = url.slice(1, url.length - 1);
    console.log(page);
    return this.http.get(`${environment.databaseurl}/genericwebsite/_design/pages/_view/url?startkey=%22${page}%22`)
      .map((resp) => resp.json())
      .do((data) => console.log(data));
// console.log('http://www.json-generator.com/api/json/get'+url);
//     if(this.cacheService.get(url)) {
//       return Observable.of(this.cacheService.get(url));
//     }
//
//     return this.http.get('http://www.json-generator.com/api/json/get'+url)
//       .map(response=> response.json())
//       .do(data => {
//         this.cacheService.set(url,data);
//       });
  }


  resolve(route: ActivatedRouteSnapshot) {
    return this.resolveUrlSegment(route.url);
  }

  public resolveUrlSegment(urlseg) {
    let url = this.sanitizeUrlSegment(urlseg);
    return this.resolveUrl(url);
  }

  private sanitizeUrlSegment(url) {
    return '/'+url.reduce((acc, segment) => {
        return acc+segment.path+'/';
      }, '');
  }
}
