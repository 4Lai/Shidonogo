import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-comedy',
  templateUrl: './comedy.component.html',
  styleUrls: ['./comedy.component.scss'],
})
export class ComedyComponent {
  constructor(private http: HttpClient) {}

  comedyData = this.http
    .get<{ data: any[]; pagination: any[] }>(
      `https://api.jikan.moe/v4/anime?q=comedy&sfw`
    )
    .pipe(
      map((val) => {
        return val.data;
      })
    );
}
