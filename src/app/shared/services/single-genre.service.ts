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
        .get<{ data: any[]; pagination: any[] }>(
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
