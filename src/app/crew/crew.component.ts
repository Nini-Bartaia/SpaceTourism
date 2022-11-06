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

    const circle=document.querySelectorAll('.circle')
    circle.forEach((item)=>{
      item.addEventListener('click',()=>{
        document.querySelector('.active')?.classList.remove('active')
        item.classList.add('active')
      })
    })

  }

 

  
  public dest(){
    this.route.navigate(['destination'])
    // this.hr.nativeElement.setStyle='animation-name:prev, animation-duration:1s'
    // console.log(this.hr)
    
  }
  // public crew(){
  //   this.route.navigate(['crew'])
   
  // }
  public tech(){
    this.route.navigate(['technology'])
  }

  public member1(){
    const mem2=document.querySelectorAll('.par')[1]
    this.render.setStyle(mem2,'display', 'none')
    const img2=document.querySelectorAll('.pic')[1]
    this.render.setStyle(img2, 'display','none')
    const mem1=document.querySelectorAll('.par')[0]
    this.render.setStyle(mem1,'display', 'block')
    const img1=document.querySelectorAll('.pic')[0]
    this.render.setStyle(img1, 'display','block')
    const mem3=document.querySelectorAll('.par')[2]
    this.render.setStyle(mem3, 'display','none')
    const img3=document.querySelectorAll('.pic')[2]
    this.render.setStyle(img3, 'display','none')
    const img4=document.querySelectorAll('.pic')[3]
    this.render.setStyle(img4, 'display','none')
    const mem4=document.querySelectorAll('.par')[3]
    this.render.setStyle(mem4, 'display','none')

  }

  public member2(){
    const mem1=document.querySelectorAll('.par')[0]
    this.render.setStyle(mem1, 'display','none')
    const mem2=document.querySelectorAll('.par')[1]
    this.render.setStyle(mem2,'display', 'block')
    const img2=document.querySelectorAll('.pic')[1]
    this.render.setStyle(img2, 'display','block')
    const img1=document.querySelectorAll('.pic')[0]
    this.render.setStyle(img1, 'display','none')
    const mem3=document.querySelectorAll('.par')[2]
    this.render.setStyle(mem3, 'display','none')
    const img3=document.querySelectorAll('.pic')[2]
    this.render.setStyle(img3, 'display','none')
    const img4=document.querySelectorAll('.pic')[3]
    this.render.setStyle(img4, 'display','none')
    const mem4=document.querySelectorAll('.par')[3]
    this.render.setStyle(mem4, 'display','none')



  }

  public member3(){
    const mem1=document.querySelectorAll('.par')[0]
    this.render.setStyle(mem1, 'display','none')
    const mem2=document.querySelectorAll('.par')[1]
    this.render.setStyle(mem2,'display', 'none')
    const img2=document.querySelectorAll('.pic')[1]
    this.render.setStyle(img2, 'display','none')
    const img1=document.querySelectorAll('.pic')[0]
    this.render.setStyle(img1, 'display','none')
    const mem3=document.querySelectorAll('.par')[2]
    this.render.setStyle(mem3, 'display','block')
    const img3=document.querySelectorAll('.pic')[2]
    this.render.setStyle(img3, 'display','block')
    const img4=document.querySelectorAll('.pic')[3]
    this.render.setStyle(img4, 'display','none')
    const mem4=document.querySelectorAll('.par')[3]
    this.render.setStyle(mem4, 'display','none')


  }
  public member4(){
    const mem1=document.querySelectorAll('.par')[0]
    this.render.setStyle(mem1, 'display','none')
    const mem2=document.querySelectorAll('.par')[1]
    this.render.setStyle(mem2,'display', 'none')
    const img2=document.querySelectorAll('.pic')[1]
    this.render.setStyle(img2, 'display','none')
    const img1=document.querySelectorAll('.pic')[0]
    this.render.setStyle(img1, 'display','none')
    const mem3=document.querySelectorAll('.par')[2]
    this.render.setStyle(mem3, 'display','none')
    const img3=document.querySelectorAll('.pic')[2]
    this.render.setStyle(img3, 'display','none')
    const img4=document.querySelectorAll('.pic')[3]
    this.render.setStyle(img4, 'display','block')
    const mem4=document.querySelectorAll('.par')[3]
    this.render.setStyle(mem4, 'display','block')
  }
  
 



}
