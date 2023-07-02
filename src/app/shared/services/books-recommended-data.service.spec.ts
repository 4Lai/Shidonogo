import { TestBed } from '@angular/core/testing';

import { BooksRecommendedDataService } from './books-recommended-data.service';

describe('BooksRecommendedDataService', () => {
  let service: BooksRecommendedDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksRecommendedDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
