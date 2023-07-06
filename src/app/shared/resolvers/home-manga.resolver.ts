import { ResolveFn } from '@angular/router';
import { FeaturedBookRecommendedService } from '../services/featured-book-recommended.service';
import { inject } from '@angular/core';
import { map } from 'rxjs';

export const homeMangaResolver: ResolveFn<any> = (route, state) => {
  const dataService = inject(FeaturedBookRecommendedService);

  return dataService.getData().pipe(map((val) => val.data));
};
