import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpDataRequestService {

  constructor(private ht:HttpClient) {}
  
  getData(){
    return this.ht.get('https://jsonplaceholder.typicode.com/users');
  }
  put(data:any){
    return this.ht.post('http://localhost:3000/employees',data);
  }

 
}
