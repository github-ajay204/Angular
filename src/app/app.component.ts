import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { empty } from 'rxjs';
import { Fruit } from './Fruit';
import {FRUITS} from './Fruit-List'
import { NsService } from './ns.service';
@Component({
  selector: 'app-root',
  // template: `
  //   <ul>
  //     <li *ngFor="let item of myArray">
  //       {{ item }}
  //     </li>
  //   </ul>
  // `,
  // template:`
  // <ul>
  // <li *ngIf = "myArray; else idtemp">Array present
  // </li>
  // </ul>
  // <ng-template #idtemp>Array is empty
  // `,
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-app';
  myobj={
    color:'red',
    material:'soft'
  }
  myArray=false
  goback(){
    alert('hi');
  }

  fruits=FRUITS;
  SelectedFruit!:Fruit ;
  Message:string="";
  
  ngOnInit():void {
//this.Message=this.nsService.getMsg();
  }

  onSelect(fruit:Fruit):void{
    this.SelectedFruit=fruit;
  }

  constructor(private nsService:NsService){

  }
}
