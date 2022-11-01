import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss'],
  
})
export class CrewComponent implements OnInit {
  @ViewChild('hr')
  hr!: ElementRef;
  constructor(private route:Router, private render:Renderer2) { }

  ngOnInit(): void {

  }

 

  
  public dest(){
    this.route.navigate(['destination'])
    this.hr.nativeElement.setStyle='animation-name:prev, animation-duration:1s'
    console.log(this.hr)
    
  }
  public crew(){
    this.route.navigate(['crew'])
   
  }
  public tech(){
    this.route.navigate(['technology'])
  }
  
 



}
