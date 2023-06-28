import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { firstValueFrom, map } from 'rxjs';

@Injectable()
export class SingleGenreService {
  readonly genreAnimeListSignal = signal<any[]>([]);

  constructor(private http: HttpClient) {}

  async getAnimeList(genre: string) {
    const animeList = await firstValueFrom(
      this.http
        .get<GenreListInterface>(
          `https://api.jikan.moe/v4/anime?q=${genre}&sfw`
        )
        .pipe(
          map((val) => {
            return val.data;
          })
        )
    );
    this.setGenreAnimeListSignal(animeList);
  }

  setGenreAnimeListSignal(data: any[]) {
    this.genreAnimeListSignal.set(data);
  }
}
export interface SingleGenreInterface {
  aired: { from: string; to: string };
  airing: boolean;
  approved: boolean;
  background: string;
  broadcast: any;
  demographics: any[];
  duration: string;
  episodes: number;
  explicit_genres: any[];
  favorites: number;
  genres: any;
  images: any;
  licensors: any[];
  mal_id: number;
  members: number;
  popularity: number;
  producers: any[];
  rank: number;
  rating: string;
  score: number;
  scored_by: number;
  season: string;
  source: string;
  status: string;
  studios: any[];
  synopsis: string;
  themes: any[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: any[];
  titles: any[];
  trailer: any;
  type: string;
  url: string;
  year: number;
}
export interface GenreListInterface {
  data: SingleGenreInterface[];
  pagination: any;
}
