import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable()
export class PageContentService {

  constructor(private http: Http) { }

  getPageContent(id: string): Observable<any[]> {
    return this.http.get(`${environment.databaseurl}/genericwebsite/${id}`)
      .map((resp) => resp.json())
      .map((data) => data.pagecontent)
  }
}
