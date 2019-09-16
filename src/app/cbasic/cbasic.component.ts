import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CbasicService } from '../cbasic.service';



@Component({
  selector: 'app-cbasic',
  templateUrl: './cbasic.component.html',
  styleUrls: ['./cbasic.component.css']
})
export class CbasicComponent implements OnInit {
  examdata:any[]=[];
  correctanswer:any[]=[];
  marks:number=0;
  result:any[]=[];
  interval:any;
  timeLeft:any;
  


  constructor(private us:CbasicService, private route:Router ) { }

  ngOnInit() {

    this.us.fun().subscribe(x=>{this.examdata=x, console.log(this.examdata)})
    this.startTimer();
  }




  onoptchange(que, ans){
    var ques = this.examdata[que-1].questionno;
    var ans=ans.option;
    this.result[que-1]={ques,ans};
  }
f:boolean=false;
  submited_data(){
    confirm("are you sure ! you want to submit the exam")
    console.log(this.result);
    for(let i=0;i<this.examdata.length;i++)
        {
          
           var qno= this.examdata[i].questionno;
           var crtansr = this.examdata[i].correctanswer;
           this.correctanswer[i] ={qno,crtansr} 
          
        }
        console.log(this.correctanswer);
        console.log(this.result)          

        for(let i=0; i<this.correctanswer.length; i++){
          for(let j=i; j<=i; j++){
            if(this.correctanswer[i].crtansr === this.result[j].ans){
              this.marks++;
            }
          }
        }
        this.f=!this.f;
        //alert("your enterd "+this.marks + " correct answers");
  }




  // submited_data(){
  //   console.log(this.result);
  //   for(let i=0;i<this.examdata.length;i++)
  //     {
        
  //       var qno= this.examdata[i].questionno;
  //       var crtansr = this.examdata[i].correctanswer;
  //       this.correctanswer[i] ={qno,crtansr}             
  //     }
      
  //   console.log(this.correctanswer);
  //   for(var i=0; i<this.result.length; i++){
  //     for(var j=0; j<this.correctanswer.length; j++ ){
  //       if(this.result[i]==this.correctanswer[j]){
  //         this.marks++;
  //       }
  //     }
  //   }
       





      //   for(var a=0; a<this.correctanswer.length; a++ ){
      //     for(var b=0; b<this.result.length; b++){
      //       if(this.correctanswer[a].crtansr == this.result[b].ans){
      //         this.marks.push(this.result[b].ans);
              
      //       }
      //     }
      //   }
      //   console.log(this.marks)

      startTimer()
      {
        this.interval = setInterval(()=>{
          if(this.timeLeft>0)
          {
            this.timeLeft--;
          }
          else
          {
            this.timeLeft =120;
          }
        },1000)
      }
       

}