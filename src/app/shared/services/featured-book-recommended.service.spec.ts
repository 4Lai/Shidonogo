import { TestBed } from '@angular/core/testing';

import { FeaturedBookRecommendedService } from './featured-book-recommended.service';

describe('FeaturedBookRecommendedService', () => {
  let service: FeaturedBookRecommendedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeaturedBookRecommendedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
