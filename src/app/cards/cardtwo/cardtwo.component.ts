import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardtwo',
  templateUrl: './cardtwo.component.html',
  styleUrls: ['./cardtwo.component.css']
})
export class CardtwoComponent implements OnInit {

  style: object = {
    'background-color': '#fff',
    'color': '#696969',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
