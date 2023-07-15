import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { FooterDataService } from '../services/footer-data.service';

export const footerResolver: ResolveFn<any> = (route, state) => {
  const footerData = inject(FooterDataService);

  return footerData.footerDataLink.find((val) => {
    return val.url === state.url;
  });
};
