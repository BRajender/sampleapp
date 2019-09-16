import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  c:any[]=[];
  constructor(private ac:UserService) { }

  ngOnInit() {
    this.ac.read().subscribe(x=>{console.log(x['msg'])
    this.c=x['msg']})
  }
  
  edit(v){
    console.log(v)
    this.ac.update(v).subscribe(x=>{alert(x['msg'])});
  }

}
