import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  //inject http client object
  constructor(private ac:HttpClient,private route:Router) { }

  getData():Observable<any[]>  
  {
    return this.ac.get<any[]>('/admin/userinformation')
    
  }
  
}
