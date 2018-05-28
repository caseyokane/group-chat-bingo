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

  constructor(private bingoBoardService: BingoBoardService) { }

  ngOnInit() {
    this.getSubjects();
  }

  getSubjects(): void {
    this.bingoBoardService.getSubjects()
        .subscribe(subject => this.subjects = subject);
  }

  onSelect(subject: Subject): void {
    this.subjects[subject.id - 1].selected = !this.subjects[subject.id - 1].selected;
  }

}
