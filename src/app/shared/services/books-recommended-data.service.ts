import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BooksRecommendedDataService {
  constructor() {}

  booksRecomendedData: BooksRecommendedDataInterface[] = [
    {
      name: 'Novel',
      title: 'Demon Slayer: Kimetsu no Yaiba—One-Winged Butterfly',
      img: 'assets/img/imgg/1.jpg',
    },
    {
      name: 'Activity Book',
      title: 'Demon Slayer: Kimetsu no Yaiba: The Official Coloring Book',
      img: 'assets/img/imgg/2.jpg',
    },
    {
      name: 'Manga',
      title: 'Demon Slayer: Kimetsu no Yaiba—Stories of Water and Flame',
      img: 'assets/img/imgg/3.jpg',
    },
    {
      name: 'Manga',
      title: 'Demon Slayer: Kimetsu no Yaiba, Vol. 1',
      img: 'assets/img/imgg/4.jpg',
    },
  ];

  booksRecomendedDataTitle: BooksRecommendedDataTitleInterface[] = [
    {
      h: 'Other Demon Slayer books',
      linkText: 'See more >',
    },
  ];
}
export interface BooksRecommendedDataInterface {
  name: string;
  title: string;
  img: string;
}
export interface BooksRecommendedDataTitleInterface {
  h: string;
  linkText: string;
}
