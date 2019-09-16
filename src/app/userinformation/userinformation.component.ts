import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-userinformation',
  templateUrl: './userinformation.component.html',
  styleUrls: ['./userinformation.component.css']
})
export class UserinformationComponent implements OnInit {
 a:any[]=[];
  constructor(private dc:AdminService) { }

  ngOnInit() {
    this.dc. getData().subscribe(x=>{
      console.log(x['msg'])
      this.a=x['msg']
    })
  }

}
