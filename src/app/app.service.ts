import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  baseURPL = 'http://localhost:3000';
  constructor() { }
}
