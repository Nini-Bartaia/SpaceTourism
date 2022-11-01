import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('hr')
  hr!: ElementRef;


  constructor( public route: Router, private elementRef:ElementRef) { }
 
  ngOnInit(): void {
   
  }

  
  public navigate(){
    this.route.navigate(['destination'])
    this.hr.nativeElement.setStyle='animation-name:dest, animation-duration:1s;'
    console.log(this.hr)
     
  }
  public crew(){
    this.route.navigate(['crew'])
    const n=document.getElementsByClassName('hr2')[0];
    console.log(n)
    n.classList.add('animati');
    
    

  }
  public tech(){
    this.route.navigate(['technology'])
    const n=document.getElementsByClassName('hr2')[0];
    console.log(n)
    n.classList.add('techn');
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
