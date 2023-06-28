import { TestBed } from '@angular/core/testing';

import { FeaturedMangaDataService } from './featured-manga-data.service';

describe('FeaturedMangaDataService', () => {
  let service: FeaturedMangaDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeaturedMangaDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
