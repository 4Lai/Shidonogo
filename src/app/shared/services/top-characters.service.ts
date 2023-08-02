import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TopCharactersService {
  constructor(private http: HttpClient) {}

  getTopCharacterList() {
    return this.http.get<TopCharacterListInterface>(
      `https://api.jikan.moe/v4/top/characters`
    );
  }

  getCharactersByPage(page: number) {
    return this.http.get<TopCharacterListInterface>(
      `https://api.jikan.moe/v4/top/characters` + '?page=' + page
    )
  }
}

export interface TopCharacterListInterface {
  data: [
    {
      mal_id: number;
      url: string;
      images: {
        jpg: {
          image_url: string;
          small_image_url: string;
        };
        webp: {
          image_url: string;
          small_image_url: string;
        };
      };
      name: string;
      name_kanji: string;
      nicknames: string[];
      favorites: number;
      about: string;
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
