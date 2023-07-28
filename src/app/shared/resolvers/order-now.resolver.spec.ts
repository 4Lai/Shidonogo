import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { orderNowResolver } from './order-now.resolver';

describe('orderNowResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => orderNowResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
