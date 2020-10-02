import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() index: number;

  indexElement: string;
  idElement: string;
  session: any;

  cardSelected: string = null;
  cardOne: string = 'cardOne';
  cardTwo: string = 'cardTwo';

  constructor() { }

  ngOnInit(): void {
    this.idElement = `index_${this.index}`; // variável que armazena o index_id
    this.indexElement = this.index.toString(); // variável que guarda o index
    this.session = JSON.parse(sessionStorage.getItem(`${this.idElement}`)); // recupera a sessão

    if (this.session) {
      console.log('Exist session storage: ', this.session['card']);
      this.cardSelected = this.session['card'];
    } else {
      console.log('No exist session storage: ', this.cardSelected);
    }
  }

  onSwitchCardOne(): void {
    this.onSwitchCard('cardOne');
  }

  onSwitchCardTwo(): void {
    this.onSwitchCard('cardTwo');
  }

  private onSwitchCard(cardChosen: string): void {
    let clicked: boolean = false;
    clicked = !clicked;

    if (clicked) {
      sessionStorage.removeItem(this.idElement);
      sessionStorage.setItem(this.idElement, JSON.stringify({
        id: this.idElement,
        value: this.index,
        card: cardChosen,
      }));

      this.session = JSON.parse(sessionStorage.getItem(`${this.idElement}`));
      this.cardSelected = this.session['card'];
    } else {
      sessionStorage.removeItem(this.idElement);
    }
  }

}
