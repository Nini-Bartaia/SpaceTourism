import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {

  constructor(private route:Router, private render: Renderer2) { }

  ngOnInit(): void {

    const circles=document.querySelectorAll('.circle')
    circles.forEach((item)=>{
      item.addEventListener('click',()=>{
        document.querySelector('.active')?.classList.remove('active')
        item.classList.add('active')
      })
    })
  }


public nav(){
  this.route.navigate(['home'])
}
public nav1(){
  this.route.navigate(['destination'])
}
public nav2(){
  this.route.navigate(['crew'])
}

public first(){
  const space1=document.querySelectorAll('.text')[0]
  this.render.setStyle(space1,'display','block')
  const img1=document.querySelectorAll('.spaceimg')[0]
  this.render.setStyle(img1,'display','block')
  const space2=document.querySelectorAll('.text')[1]
  this.render.setStyle(space2,'display','none')
  const img2=document.querySelectorAll('.spaceimg')[1]
  this.render.setStyle(img2,'display','none')
  const space3=document.querySelectorAll('.text')[2]
  this.render.setStyle(space3,'display','none')
  const img3=document.querySelectorAll('.spaceimg')[2]
  this.render.setStyle(img3,'display','none')
  
}

public second(){
  const space1=document.querySelectorAll('.text')[0]
  this.render.setStyle(space1,'display','none')
  const img1=document.querySelectorAll('.spaceimg')[0]
  this.render.setStyle(img1,'display','none')
  const space2=document.querySelectorAll('.text')[1]
  this.render.setStyle(space2,'display','block')
  const img2=document.querySelectorAll('.spaceimg')[1]
  this.render.setStyle(img2,'display','block')
  const space3=document.querySelectorAll('.text')[2]
  this.render.setStyle(space3,'display','none')
  const img3=document.querySelectorAll('.spaceimg')[2]
  this.render.setStyle(img3,'display','none')
}

public third(){
  const space1=document.querySelectorAll('.text')[0]
  this.render.setStyle(space1,'display','none')
  const img1=document.querySelectorAll('.spaceimg')[0]
  this.render.setStyle(img1,'display','none')
  const space2=document.querySelectorAll('.text')[1]
  this.render.setStyle(space2,'display','none')
  const img2=document.querySelectorAll('.spaceimg')[1]
  this.render.setStyle(img2,'display','none')
  const space3=document.querySelectorAll('.text')[2]
  this.render.setStyle(space3,'display','block')
  const img3=document.querySelectorAll('.spaceimg')[2]
  this.render.setStyle(img3,'display','block')
}


}
