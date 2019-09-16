import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CbasicService {

  constructor(private hc:HttpClient) { }

  fun():Observable<any[]>
  {
   return this.hc.get<any[]>("assets/c.json")
  }
  
}