import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RandomQuotesDataService {
  constructor() {}
  randomQuotesData: RandomQuotesDataInterface[] = [
    {
      title: 'Random quotes from anime!',
      action: 'Click to draw',
      img: '/assets/img/imgggg/cube.png',
    },
  ];
}
export interface RandomQuotesDataInterface {
  title: string;
  action: string;
  img: string;
}
