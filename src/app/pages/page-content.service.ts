import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class PageContentService {

  constructor(private http: Http) { }

  getPageContent(id: string): Observable<any[]> {
    return this.http.get("http://localhost:6905/genericwebsite/" + id)
      .map((resp) => resp.json())
      .map((data) => data.pagecontent)
  }
}
