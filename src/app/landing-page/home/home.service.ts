import { Injectable } from '@angular/core';
import { AppService } from '../../app.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private appService: AppService,
    private http: HttpClient
  ) { }

  baseURL = this.appService.baseURPL;

  cbase(url, arr) {
    // tslint:disable-next-line:one-variable-per-declaration
    let entry, i, len;
    url = this.baseURL + '/' + url;
    for (i = 0, len = arr.length; i < len; i++) {
      entry = arr[i];
      url += '/' + entry;
    }
    return url;
  }

  // SERVICE MODEL
  private prodoct(url, params) {
    return this.http.get(this.cbase(url, params)).toPromise();
  }

  // CALL SERVICE
  getProduct(query) {
    return this.prodoct('product' + query, []);
  }

  getNewProduct(query) {
    return this.prodoct('product/new' + query, []);
  }
}
