import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { FeaturedBookRecommendedService } from '../services/featured-book-recommended.service';
import { map } from 'rxjs';

export const mangaListResolver: ResolveFn<any> = (route, state) => {
  const mangaListData = inject(FeaturedBookRecommendedService);

  return mangaListData.getData().pipe(
    map((val) => {
      return val.data;
    })
  );
};
