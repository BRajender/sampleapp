import { Injectable } from '@angular/core';

import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService implements HttpInterceptor{

  constructor() { }
  intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>
  {
    //read token from localstorage
    const token=localStorage.getItem("token");
    //if token is found,add it to headers of request object
    if(token)
    {
      const cloned=req.clone({headers:req.headers.set("Authorization","Bearer "+token)})
      //sending to next intercepter or t backend
      return next.handle(cloned);
    }
    //if token not found forward request to next intercepter
    else
    {
      //sending to next interceptor or to backend
      return next .handle(req);
    }
  }
}
