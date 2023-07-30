import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { FeaturedBookRecommendedService, FeaturedBookSingleInterface } from '../services/featured-book-recommended.service';

export const orderNowResolver: ResolveFn<FeaturedBookSingleInterface> = (
  route,
  state
) => {
  const dataService = inject(FeaturedBookRecommendedService);

  return dataService.getDataById(route.params['id']);
};
