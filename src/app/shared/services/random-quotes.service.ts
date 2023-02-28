import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RandomQuotesService {

  constructor(private http: HttpClient) {
  }
  getRandomQuotesData() {
    return this.http.get('https://animechan.vercel.app/api/random')
  }
}
