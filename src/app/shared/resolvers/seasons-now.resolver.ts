import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { SeasonsService, seasonInterface } from '../services/seasons.service';
import { map } from 'rxjs';

export const seasonsNowResolver: ResolveFn<seasonInterface> = (
  route,
  state
) => {
  const seasonsNow = inject(SeasonsService);

  return seasonsNow.getSeasonNow().pipe(
    map((val) => {
      return val;
    })
  );
};
