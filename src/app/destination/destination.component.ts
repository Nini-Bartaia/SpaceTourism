import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router, TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss'],
  
})
export class DestinationComponent implements OnInit {
  @ViewChild('hr')
  hr!: ElementRef;
  
  constructor( public route: Router, private render:Renderer2) {
   
   }

  ngOnInit(): void {
  
  }
 
 
  previous(){
    
    this.route.navigate(['home'])
    // this.hr.nativeElement.setStyle=''
  }

  public crew(){
    this.route.navigate(['crew'])
    this.hr.nativeElement.setStyle='animation-name:prev, animation-duration:1s'
    console.log(this.hr)
    
    
    
  }
  
  
}



