import { TestBed } from '@angular/core/testing';

import { RandomQuotesDataService } from './random-quotes-data.service';

describe('RandomQuotesDataService', () => {
  let service: RandomQuotesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomQuotesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
