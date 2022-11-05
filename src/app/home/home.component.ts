import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  
})
export class HomeComponent implements OnInit {
  @ViewChild('hr')
  hr!: ElementRef;
  

  constructor( public route: Router, private elementRef:ElementRef, private render:Renderer2) { }
 
  ngOnInit(): void {
   
  }
   
  
  public navigate(){
   
    this.route.navigate(['destination'])
  //  const line=document.querySelectorAll('.hr2')[0]
  //  this.render.setStyle(line,'animation-name','dest')
  //  this.render.setStyle(line,'animation-duration','1s')
  
   
  //  this.render.setStyle(this.hr.nativeElement,'animation-name','dest');
  //  this.render.setStyle(this.hr.nativeElement,'animation-duration','1s');
  //  this.render.setStyle(this.hr.nativeElement,'height','200px');
   
    // console.log(line)
     
  }
  public crew(){
    this.route.navigate(['crew'])
    // const line=document.querySelectorAll('.hr2')[0]
    // this.render.setStyle(line,'animation-name','crew')
    // this.render.setStyle(line,'animation-duration','1s')
    
  }
  public tech(){
    this.route.navigate(['technology'])
    // const line=document.querySelectorAll('.hr2')[0]
    // this.render.setStyle(line,'animation-name','tech')
    // this.render.setStyle(line,'animation-duration','1s')
  }

  
    
  
 
  // public fun(){
  //   const para=document.querySelectorAll('.para')
  //   this.clicked++;
    
  //   para
  //   console.log(para)

  //   para.forEach((element,index)=>{
  //     if(index < this.clicked){
  //       console.log(element)
  //       console.log(index)
  //       console.log(this.clicked)
  //     }
  //   })



  // }
 


}


