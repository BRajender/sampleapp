import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  x:any[]=[];
  constructor(private ac:HttpClient,private route:Router) { }

  data(v):Observable<any>
  {
    this.x=v;
    console.log('service')
    console.log(v)
    console.log(this.route.url)
    return this.ac.post(this.route.url,v)
    
  }
  //give data to profile component
  reads()
  {
    return this.x;
  }

  
  



}
