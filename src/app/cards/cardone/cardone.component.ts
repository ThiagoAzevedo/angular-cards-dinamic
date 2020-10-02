import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardone',
  templateUrl: './cardone.component.html',
  styleUrls: ['./cardone.component.css']
})
export class CardoneComponent implements OnInit {

  style = {
    'background-color': 'red',
    'color': 'yellow',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
