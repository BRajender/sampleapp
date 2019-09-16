import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css']
})
export class ExamsComponent implements OnInit {

  constructor(private route:Router) { }
  read()
  {
    this.route.navigate(['basic'])
  }


  read2(){
    this.route.navigate(['javaintermediate'])
  }
  read3(){
    this.route.navigate(['javaexpert'])
  }
  read4(){
    this.route.navigate(['cbasic'])
  }
  read5(){
    this.route.navigate(['cintermediate'])
  }
  read6(){
    this.route.navigate(['cexpert'])
  }
  read7(){
    this.route.navigate(['angularbasic'])
  }
  read8(){
    this.route.navigate(['angularintermediate'])
  }
  read9(){
    this.route.navigate(['angularexpert'])
  }

  ngOnInit() {
   
  }

}
