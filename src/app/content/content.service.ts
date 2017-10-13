import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {environment} from "../../environments/environment";

@Injectable()
export class ContentService {

  constructor(private http: Http) { }

  getContent(contentid: string) {
    return this.http.get(`${environment.databaseurl}/genericwebsite/${contentid}`)
      .map((resp) => resp.json())
      // .map(data => data.content)
  }
}

