import { ResolveFn } from '@angular/router';
import { SeasonsService, seasonInterface } from '../services/seasons.service';
import { inject } from '@angular/core';
import { map } from 'rxjs';

export const seasonsUpcomingResolver: ResolveFn<seasonInterface> = (
  route,
  state
) => {
  const seasonsUpcoming = inject(SeasonsService);

  return seasonsUpcoming.getSeasonUpcoming().pipe(
    map((val) => {
      return val;
    })
  );
};
