import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnimeReccommendedDataService {
  constructor() {}

  animeReccomendedHeaderData: AnimeRecommendedHeaderInterface[] = [
    {
      h: 'If you like Kimetsu no Yaiba, we recommend:',
      btn: 'See all >',
      urlButton: '#see',
    },
  ];

  animeReccomendedContainerData: AnimeRecommendedContainerInterface[] = [
    {
      url: '#',
      title: 'Arifureta',
      img: 'assets/img/imggg/111/1.webp',
    },
    {
      url: '#',
      title: 'One Punch Man',
      img: 'assets/img/imggg/111/2.jpg',
    },
    {
      url: '#',
      title: 'Dragon Ball series',
      img: 'assets/img/imggg/111/3.jpg',
    },
    {
      url: '#',
      title: 'My Hero Academia',
      img: 'assets/img/imggg/111/4.jpg',
    },
  ];
}

export interface AnimeRecommendedHeaderInterface {
  h: string;
  btn: string;
  urlButton: string;
}
export interface AnimeRecommendedContainerInterface {
  url: string;
  title: string;
  img: string;
}
