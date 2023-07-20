import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { firstValueFrom, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SeasonsService {
  readonly seasonBy = signal<any[]>([])

  constructor(private http: HttpClient) {}

  getSeasonNow() {
    return this.http.get<seasonInterface>(
      `https://api.jikan.moe/v4/seasons/now`
    );
  }

  getSeasonUpcoming() {
    return this.http.get<seasonInterface>(
      `https://api.jikan.moe/v4/seasons/upcoming`
    );
  }

  async getSeasonBy(year: number, season: string) {
    const seasonBy = await firstValueFrom(
      this.http.get<seasonInterface>(
        `https://api.jikan.moe/v4/seasons/${year}/${season}`
      ).pipe(map(val => val))
    );
    this.setSeasonBy(seasonBy)
  }

  setSeasonBy(data: seasonInterface) {
    this.seasonBy.set(data.data)
  }
}

export interface seasonInterface {
  data: [
    {
      mal_id: number;
      url: string;
      images: {
        jpg: {
          image_url: string;
          small_image_url: string;
          large_image_url: string;
        };
        webp: {
          image_url: string;
          small_image_url: string;
          large_image_url: string;
        };
      };
      trailer: {
        youtube_id: string;
        url: string;
        embed_url: string;
      };
      approved: boolean;
      titles: [
        {
          type: string;
          title: string;
        }
      ];
      title: string;
      title_english: string;
      title_japanese: string;
      title_synonyms: string[];
      type: string;
      source: string;
      episodes: number;
      status: string;
      airing: boolean;
      aired: {
        from: string;
        to: string;
        prop: {
          from: {
            day: number;
            month: number;
            year: number;
          };
          to: {
            day: number;
            month: number;
            year: number;
          };
          string: string;
        };
      };
      duration: string;
      rating: string;
      score: number;
      scored_by: number;
      rank: number;
      popularity: number;
      members: number;
      favorites: number;
      synopsis: string;
      background: string;
      season: string;
      year: number;
      broadcast: {
        day: string;
        time: string;
        timezone: string;
        string: string;
      };
      producers: [
        {
          mal_id: number;
          type: string;
          name: string;
          url: string;
        }
      ];
      licensors: [
        {
          mal_id: number;
          type: string;
          name: string;
          url: string;
        }
      ];
      studios: [
        {
          mal_id: number;
          type: string;
          name: string;
          url: string;
        }
      ];
      genres: [
        {
          mal_id: number;
          type: string;
          name: string;
          url: string;
        }
      ];
      explicit_genres: [
        {
          mal_id: number;
          type: string;
          name: string;
          url: string;
        }
      ];
      themes: [
        {
          mal_id: number;
          type: string;
          name: string;
          url: string;
        }
      ];
      demographics: [
        {
          mal_id: number;
          type: string;
          name: string;
          url: string;
        }
      ];
    }
  ];
  pagination: {
    last_visible_page: number;
    has_next_page: boolean;
    items: {
      count: number;
      total: number;
      per_page: number;
    };
  };
}
