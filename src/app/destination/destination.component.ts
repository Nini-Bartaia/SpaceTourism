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
  @ViewChild('div')
  div!: ElementRef;
  
  
  constructor( public route: Router, private render:Renderer2, private elementRef:ElementRef) {
   
   }

  ngOnInit(): void {
    const items=document.querySelectorAll('div p');
    items.forEach((item)=>{
      item.addEventListener('click',()=>{
        document.querySelector('p.active')?.classList.remove('active')
        item.classList.add('active');
        console.log(item)
      })
    })
    
  }
  
 
  previous(){
    
    this.route.navigate(['home'])
    // this.hr.nativeElement.setStyle=''
  }

  public crew(){
    this.route.navigate(['crew'])
    // this.hr.nativeElement.setStyle='animation-name:prev, animation-duration:1s'
    // console.log(this.hr)
    
  }
  public tech(){
    this.route.navigate(['technology'])
  }

  public mars(){
    const div=document.querySelectorAll('.wrapper3')[0]
    const mars=document.querySelectorAll('.none')[0]
    this.render.setStyle(mars,'display','block')
    this.render.setStyle(div,'display','none')
    const eur=document.querySelectorAll('.none')[1]
    this.render.setStyle(eur,'display','none')
    const titan=document.querySelectorAll('.none')[2]
    this.render.setStyle(titan,'display','none')
    const img1=document.querySelectorAll('.mars')[0]
    this.render.setStyle(img1,'display', 'none')
    const img=document.querySelectorAll('.none1')[0]
    this.render.setStyle(img,'display', 'block')
    const img2=document.querySelectorAll('.none1')[1]
    this.render.setStyle(img2,'display', 'none')
    const img3=document.querySelectorAll('.none1')[2]
    this.render.setStyle(img3,'display', 'none')
    // const img1=document.querySelectorAll('.none1')[1]
    // this.render.setStyle(img1,'display', 'block')
    // const img1=document.querySelectorAll('.mars')[0]
    // this.render.setStyle(img1,'display', 'none')
    
    console.log(this.div)
    
  }
  public moon(){
    const div=document.querySelectorAll('.wrapper3')[0]
    this.render.setStyle(div,'display','block')
    const mars=document.querySelectorAll('.none')[0]
    this.render.setStyle(mars,'display','none')
    const eur=document.querySelectorAll('.none')[1]
    this.render.setStyle(eur,'display','none')
    const titan=document.querySelectorAll('.none')[2]
    this.render.setStyle(titan,'display','none')
    const img1=document.querySelectorAll('.mars')[0]
    this.render.setStyle(img1,'display', 'block')
    const img=document.querySelectorAll('.none1')[0]
    this.render.setStyle(img,'display', 'none')
    const img2=document.querySelectorAll('.none1')[1]
    this.render.setStyle(img2,'display', 'none')
    const img3=document.querySelectorAll('.none1')[2]
    this.render.setStyle(img3,'display', 'none')
    // const img=document.querySelectorAll('.none1')[0]
    // this.render.setStyle(img,'display', 'none')
    // const img1=document.querySelectorAll('.none1')[1]
    // this.render.setStyle(img1,'display', 'block')
     
    console.log(this.div)
  }
  public europa(){
    const mars=document.querySelectorAll('.none')[0]
    this.render.setStyle(mars,'display','none')
    const eur=document.querySelectorAll('.none')[1]
    this.render.setStyle(eur,'display','block')
    const div=document.querySelectorAll('.wrapper3')[0]
    this.render.setStyle(div,'display','none')
    const titan=document.querySelectorAll('.none')[2]
    this.render.setStyle(titan,'display','none')
    const img1=document.querySelectorAll('.mars')[0]
    this.render.setStyle(img1,'display', 'none')
    const img=document.querySelectorAll('.none1')[0]
    this.render.setStyle(img,'display', 'none')
    const img2=document.querySelectorAll('.none1')[1]
    this.render.setStyle(img2,'display', 'block')
    const img3=document.querySelectorAll('.none1')[2]
    this.render.setStyle(img3,'display', 'none')



  }
  public titan(){
    const mars=document.querySelectorAll('.none')[0]
    this.render.setStyle(mars,'display','none')
    const eur=document.querySelectorAll('.none')[1]
    this.render.setStyle(eur,'display','none')
    const div=document.querySelectorAll('.wrapper3')[0]
    this.render.setStyle(div,'display','none')
    const titan=document.querySelectorAll('.none')[2]
    this.render.setStyle(titan,'display','block')
    const img1=document.querySelectorAll('.mars')[0]
    this.render.setStyle(img1,'display', 'none')
    const img=document.querySelectorAll('.none1')[0]
    this.render.setStyle(img,'display', 'none')
    const img2=document.querySelectorAll('.none1')[1]
    this.render.setStyle(img2,'display', 'none')
    const img3=document.querySelectorAll('.none1')[2]
    this.render.setStyle(img3,'display', 'block')


  }

   
   
}



