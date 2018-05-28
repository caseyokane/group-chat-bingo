import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BingoBoardComponent } from './bingo-board/bingo-board.component';

import {MatButtonModule, MatCardModule, MatGridListModule, MatToolbarModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    BingoBoardComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
