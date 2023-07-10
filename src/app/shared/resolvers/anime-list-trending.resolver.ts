import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { AnimeRecommendedService } from '../services/anime-recommended.service';
import { map } from 'rxjs';

export const animeListTrendingResolver: ResolveFn<any> = (route, state) => {
  const animeListTrending = inject(AnimeRecommendedService);

  return animeListTrending.getAnimeListRecommendation().pipe(
    map((val) => {
      return val.data;
    })
  );
};
