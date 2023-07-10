import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { AnimeRecommendedService } from '../services/anime-recommended.service';
import { map } from 'rxjs';

export const animeListTrendingIdResolver: ResolveFn<any> = (route, state) => {
  const animeListTrendingId = inject(AnimeRecommendedService);

  return animeListTrendingId.getAnimeById(route.params['id']).pipe(
    map((val) => {
      return val.data;
    })
  );
};
