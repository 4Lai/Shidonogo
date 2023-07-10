import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.component.html',
  styleUrls: ['./anime-details.component.scss'],
})
export class AnimeDetailsComponent {
  trendingAnime: any = this.activatedRoute.snapshot.data['trendingAnime'];

  constructor(private activatedRoute: ActivatedRoute) {}
}
