import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  baseApi = 'https://kitsu.io/api/edge';

  constructor(private http: HttpClient) {}
  getAnime(slug: string) {
    return this.http.get(`${this.baseApi}/anime?filter[slug]=${slug}`);
  }
}
