import { Component, OnInit } from '@angular/core';

import { BingoBoardService } from '../bingo-board.service';
import { Subject } from '../subject';

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
  constructor(private bingoBoardService: BingoBoardService) {
    this.rows = 5;
    this.columns = 5;
   }
  ngOnInit() {
    this.getSubjects();
    this.setRowsAndColumns();
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
  rowWin(): void {
    for (let row = 0; row <= this.rows; row++) {
      const result = this.subjects.filter(subject => subject.row === row && subject.selected === true).length;
      if (result === 5) {
        window.alert('win');
      }
    }
  }
  columnWin(): void {
    for (let col = 0; col <= this.columns; col++) {
      const result = this.subjects.filter(subject => subject.col === col && subject.selected === true).length;
      if (result === 5) {
        window.alert('win');
      }
    }
  }
  checkWin() {
    this.rowWin();
    this.columnWin();
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
