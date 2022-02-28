import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatetimeService {

  constructor() { }
  today =new Date();
  arr:any;
  getinformation(){
    this.arr=[1,2,3,4,5,6];
  }
}
