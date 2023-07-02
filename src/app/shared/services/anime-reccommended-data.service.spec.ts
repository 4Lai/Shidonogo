import { TestBed } from '@angular/core/testing';

import { AnimeReccommendedDataService } from './anime-reccommended-data.service';

describe('AnimeReccommendedDataService', () => {
  let service: AnimeReccommendedDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimeReccommendedDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
