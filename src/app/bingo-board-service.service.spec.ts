import { TestBed, inject } from '@angular/core/testing';

import { BingoBoardServiceService } from './bingo-board-service.service';

describe('BingoBoardServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BingoBoardServiceService]
    });
  });

  it('should be created', inject([BingoBoardServiceService], (service: BingoBoardServiceService) => {
    expect(service).toBeTruthy();
  }));
});
