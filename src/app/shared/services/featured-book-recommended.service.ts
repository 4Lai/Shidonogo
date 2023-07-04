import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FeaturedBookRecommendedService {
  constructor(private http: HttpClient) {}

  getData() {
    const mangaData = this.http
      .get<FeaturedBookRecommendedInterface>(
        'https://kitsu.io/api/edge/trending/manga'
      )
      .pipe(
        map((val) => {
          return val.data;
        })
      );
    return mangaData;
  }
}
export interface FeaturedBookRecommendedInterface {
  data: [
    {
      id: string;
      type: string;
      attributes: {
        averageRating: string;
        cannonicalTitle: string;
        chapterCount: number;
        description: string;
        mangaType: string;
        posterImage: {
          large: string;
          medium: string;
          original: string;
          small: string;
          tiny: string;
        };
        titles: { en_jp: string; en_us: string };
      };
    }
  ];
}
