import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { singleMangaResolverResolver } from './single-manga-resolver.resolver';

describe('singleMangaResolverResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => singleMangaResolverResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
