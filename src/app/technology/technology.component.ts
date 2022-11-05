import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
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


}
