import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-anime-recomended',
  templateUrl: './anime-recomended.component.html',
  styleUrls: ['./anime-recomended.component.scss'],
})
export class AnimeRecomendedComponent {
  animeRecList: any = this.activatedRoute.snapshot.data['animeList'].slice(
    5,
    -1
  );

  constructor(private activatedRoute: ActivatedRoute) {}
}
