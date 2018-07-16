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

  baseURL = this.appService.baseURL;

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

}
