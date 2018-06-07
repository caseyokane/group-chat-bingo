import { Component, OnInit } from '@angular/core';
import { BingoBoardService } from '../bingo-board.service';
import { Subject } from '../subject';
import { MatDialog, MatDialogConfig } from '@angular/material';
import {BingoDialogComponent} from '../bingo-dialog/bingo-dialog.component';
@Component({
  selector: 'app-bingo-board',
  templateUrl: './bingo-board.component.html',
  styleUrls: ['./bingo-board.component.css']
})
export class BingoBoardComponent implements OnInit {

  isSelected: Boolean = false;
  subjects: Subject[];
  rows: number;
  columns: number;
  winScenario1 = [
    1, 7, 13, 19, 25
  ];
  winScenario2 = [
    5, 9, 13, 17, 21
  ];
  constructor(private bingoBoardService: BingoBoardService, public dialog?: MatDialog) {
    this.rows = 5;
    this.columns = 5;
   }
  ngOnInit() {
    this.getSubjects();
    this.setRowsAndColumns();
  }
  openWinDialog(): void {

    const config = new MatDialogConfig();
    config.autoFocus = true;
    const dialogRef = this.dialog.open(BingoDialogComponent, config);
    dialogRef.afterClosed().subscribe(result => {
      this.resetGame();
    });
  }
  // Set Rows and Columns to Identity win Scenarios
  setRowsAndColumns(): void {
    const count = this.subjects.length;
    let place = 0;
    // Set Rows
    for (let row = 1; row <= this.rows; row++) {
      // Set Columns
      for (let column = 1; column <= this.columns; column++) {
        this.subjects[place].row = row;
        this.subjects[place].col = column;
        place++;
      }
    }
  }
  rowWin(): boolean {
    for (let row = 0; row <= this.rows; row++) {
      const result = this.subjects.filter(subject => subject.row === row && subject.selected === true).length;
      if (result === this.rows) {
        return true;
      }
    }
    return false;
  }
  columnWin(): boolean {
    for (let col = 0; col <= this.columns; col++) {
      const result = this.subjects.filter(subject => subject.col === col && subject.selected === true).length;
      if (result === this.columns) {
        return true;
      }
    }
    return false;
  }
  diagonalWin(winScenario: number[]): boolean {
    for (let i = 0; i < 5; i++) {
      const sub = this.subjects.filter(subject => {
        return subject.id === winScenario[i];
      });
      if(sub[0].selected !== true) {
        return false;
      }
    }
    return true;
  }
  resetGame(): void {
    this.subjects = this.subjects.map(subject => {
      subject.selected = false;
      return subject;
    });
  }
  checkWin() {
    const rowWin = this.rowWin();
    const columnWin = this.columnWin();
    const diagonal1 = this.diagonalWin(this.winScenario1);
    const diagonal2 = this.diagonalWin(this.winScenario2);
    if (rowWin || columnWin || diagonal1 || diagonal2) {
      this.openWinDialog();
    }
  }
  getSubjects(): void {
    this.bingoBoardService.getSubjects()
        .subscribe(subject => this.subjects = subject);
  }

  onSelect(subject: Subject): void {
    this.subjects[subject.id - 1].selected = !this.subjects[subject.id - 1].selected;
    this.checkWin();
  }

}
