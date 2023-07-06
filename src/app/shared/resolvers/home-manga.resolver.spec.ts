import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { homeMangaResolver } from './home-manga.resolver';

describe('homeMangaResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => homeMangaResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
