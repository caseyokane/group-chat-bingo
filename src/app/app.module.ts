import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BingoBoardComponent } from './bingo-board/bingo-board.component';

import {MatButtonModule, MatCardModule, MatGridListModule, MatToolbarModule, MatDialogModule} from '@angular/material';
import { BingoDialogComponent } from './bingo-dialog/bingo-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    BingoBoardComponent,
    BingoDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatDialogModule
  ],
  providers: [],
  entryComponents: [
    BingoDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
