import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class AppService {

  constructor(private http:Http) {
  }

  get pages() {
    return this.http.get("http://localhost:6905/genericwebsite/_design/pages/_view/default")
      .map((resp) => resp.json())
      .map((data) => data.rows);
  }

}
