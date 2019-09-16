import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../register.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  
  constructor(private ds:RegisterService) { }

  submitData(v)
  {
    
    console.log(v)
    this.ds.data(v).subscribe(x=>alert(x['msg']));
  }

  ngOnInit() {
  }

}
