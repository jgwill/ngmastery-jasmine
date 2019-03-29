import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.scss']
})
export class MycomponentComponent implements OnInit {

  myval: string;
  constructor() {
    this.myval= "great";
   }

  ngOnInit() {
  }

}
