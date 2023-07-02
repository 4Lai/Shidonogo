import { TestBed } from '@angular/core/testing';

import { FeaturedBookDataService } from './featured-book-data.service';

describe('FeaturedBookDataService', () => {
  let service: FeaturedBookDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeaturedBookDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
