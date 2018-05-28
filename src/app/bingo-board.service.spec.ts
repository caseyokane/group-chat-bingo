import { TestBed, inject } from '@angular/core/testing';

import { BingoBoardService } from './bingo-board.service';

describe('BingoBoardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BingoBoardService]
    });
  });

  it('should be created', inject([BingoBoardService], (service: BingoBoardService) => {
    expect(service).toBeTruthy();
  }));
});
