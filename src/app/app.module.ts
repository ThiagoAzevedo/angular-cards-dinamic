import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardsComponent } from './cards/cards.component';
import { CardoneComponent } from './cards/cardone/cardone.component';
import { CardtwoComponent } from './cards/cardtwo/cardtwo.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CardoneComponent,
    CardtwoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
