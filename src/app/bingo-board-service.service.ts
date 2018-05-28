import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { SubjectList } from './SubjectList';

@Injectable({
  providedIn: 'root'
})
export class BingoBoardServiceService {

  constructor() { }

  getSubjects(): Observable<String[]> {
    return of(SubjectList);
  }
}
