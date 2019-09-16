import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private ac:LoginService,private route:Router) { }

  ngOnInit() {
  }
  logout()
  {
    this.ac.remove()
    this.route.navigate(['child/login'])
  }

}
