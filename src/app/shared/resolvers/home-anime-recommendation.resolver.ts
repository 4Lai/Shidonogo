import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { AnimeRecommendedService } from '../services/anime-recommended.service';
import { map } from 'rxjs';

export const homeAnimeRecommendationResolver: ResolveFn<any> = (
  route,
  state
) => {
  const animeRecService = inject(AnimeRecommendedService);

  return animeRecService.getAnimeListRecommendation().pipe(
    map((val) => {
      return val.data;
    })
  );
};
