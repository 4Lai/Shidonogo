import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trending-anime-list',
  templateUrl: './trending-anime-list.component.html',
  styleUrls: ['./trending-anime-list.component.scss'],
})
export class TrendingAnimeListComponent {
  trendingAnimeList = this.activatedRoute.snapshot.data['trendingAnime'];

  constructor(private activatedRoute: ActivatedRoute) {}
}
