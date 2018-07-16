import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  baseURL = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

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
  private modelGet(url, params) {
    return this.http.get(this.cbase(url, params)).toPromise();
  }
  // END SERVICE MODEL

  // CALL SERVICE
  // Category
  getCategory(query) {
    return this.modelGet('category' + query, []);
  }
  // Product
  getProductByCategory(query) {
    return this.modelGet('product' + query, []);
  }

  getProduct(query) {
    return this.modelGet('product' + query, []);
  }

  getNewProduct(query) {
    return this.modelGet('product/new' + query, []);
  }

  // END CALL SERVICE
}
