import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './app-interpolation.component.html',
  styleUrls: ['./app-interpolation.component.css']
})
export class AppInterpolationComponent implements OnInit { 

  obj = {
    name: 'kelly',
    age: 30
  };

  arr = ['apple', 'banana', 'watermelon'];

  getTitle(){
    return 'Angular Interpolation Practice'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
