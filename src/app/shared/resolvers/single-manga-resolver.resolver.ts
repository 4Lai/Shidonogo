import { ResolveFn } from '@angular/router';
import { FeaturedBookRecommendedService } from '../services/featured-book-recommended.service';
import { inject } from '@angular/core';
import { map } from 'rxjs';

export const singleMangaResolverResolver: ResolveFn<any> = (route, state) => {
  const dataService = inject(FeaturedBookRecommendedService);

  return dataService
    .getDataById(route.params['id'])
    .pipe(map((val) => val.data));
};
