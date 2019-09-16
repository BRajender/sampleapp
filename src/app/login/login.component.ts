import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data:any[]=[];
  

  //injecting dataservice object from root injector

  constructor(private ds:UserService,private route:Router) { }

  //reading observable by subscribing to it

  ngOnInit() 
  {
    
    
  
  }
  submitData(v)
  {
    this.ds.getData(v).subscribe(x=>{
     
       
      if(x['token']){
        
          localStorage.setItem('token',x['token']);
          this.route.navigate(['user']);
        

      }
      else if(x['msg']=='invalid user name'){
        alert(x['msg']);
      }
      else if(x['msg']=='invalid password'){
        alert(x['msg']);
      }
        
      else if(x['msg']=='Admin logged successfully'){

        this.route.navigate(['admin'])
      }   
        
     
    })
  }

  
 
}
