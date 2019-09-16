import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'  
})
export class UserService { 

  //inject http clent object
  constructor(private hc:HttpClient,private route:Router){}

  //make http get request to user.jsonfile

  getData(s):Observable<any[]>
  {
    return this.hc.post<any[]>(this.route.url,s)
    console.log(this.route.url)

  }

  //read data of logined user
  read():Observable<any[]>
  {
    return this.hc.get<any[]>(this.route.url)
    console.log(this.route.url)
  }

  update(s):Observable<any>
  {
    return this.hc.put<any>(this.route.url,s)
  }


}
