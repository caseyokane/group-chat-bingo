import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Subject } from './subject';
import { SUBJECTS } from './SubjectList';

@Injectable({
  providedIn: 'root'
})
export class BingoBoardService {

  constructor() { }

  getSubjects(): Observable<Subject[]> {
    return of(SUBJECTS);
  }
}
