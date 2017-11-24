import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {environment} from "../environments/environment";

@Injectable()
export class AppService {

  constructor(private http:Http) {
  }

  get pages() {
    return this.http.get(`${environment.databaseurl}/genericwebsite/_design/mainmenu/_view/mainmenu`)
      .map((resp) => resp.json())
      .map((data) => data.rows[0].value)
      .map(data => data.content)
  }

}
