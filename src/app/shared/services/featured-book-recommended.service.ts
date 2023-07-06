import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FeaturedBookRecommendedService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<FeaturedBookListInterface>(
      'https://kitsu.io/api/edge/trending/manga'
    );
  }

  getDataById(id: number) {
    return this.http.get<FeaturedBookSingleInterface>(
      `https://kitsu.io/api/edge/manga/${id}`
    );
  }
}
export interface FeaturedBookListInterface {
  data: FeaturedBookInterface[];
}

export interface FeaturedBookSingleInterface {
  data: FeaturedBookInterface;
}

export interface FeaturedBookInterface {
  id: string;
  type: string;
  attributes: {
    averageRating: string;
    canonicalTitle: string;
    coverImage: {
      large: string;
      original: string;
      small: string;
      tiny: string;
    };
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
    synopsis: string;
    titles: { en_jp: string; en_us: string };
  };
}
