import { Component } from '@angular/core';
import { AnimeReccommendedDataService } from '../../services/anime-reccommended-data.service';

@Component({
  selector: 'app-anime-recomended',
  templateUrl: './anime-recomended.component.html',
  styleUrls: ['./anime-recomended.component.scss'],
})
export class AnimeRecomendedComponent {
  data = this.animeData;
  constructor(private animeData: AnimeReccommendedDataService) {}
}
