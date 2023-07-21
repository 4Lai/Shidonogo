import { ResolveFn } from '@angular/router';
import {
  SeasonsService,
  animeByIdDetailsInterface,
} from '../services/seasons.service';
import { inject } from '@angular/core';
import { map } from 'rxjs';

export const seasonsAnimeIdDetailsResolver: ResolveFn<
  animeByIdDetailsInterface
> = (route, state) => {
  const animeDetailsId = inject(SeasonsService);

  return animeDetailsId.getAnimeById(route.params['id']).pipe(
    map((val) => {
      return val;
    })
  );
};
