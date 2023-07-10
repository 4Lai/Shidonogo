import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnimeRecommendedService {
  constructor(private http: HttpClient) {}

  getAnimeListRecommendation() {
    return this.http.get<animeRecommendedListInterface>(
      'https://kitsu.io/api/edge/trending/anime'
    );
  }
  getAnimeById(id: number) {
    return this.http.get<animeRecommendedSingleInterface>(
      `https://kitsu.io/api/edge/anime/${id}`
    );
  }
}

export interface animeRecommendedListInterface {
  data: animeRecommendedInterface[];
}

export interface animeRecommendedSingleInterface {
  data: animeRecommendedInterface;
}

export interface animeRecommendedInterface {
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
