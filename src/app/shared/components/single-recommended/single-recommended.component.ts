import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SingleGenreService } from '../../services/single-genre.service';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-single-recommended',
  templateUrl: './single-recommended.component.html',
  styleUrls: ['./single-recommended.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SingleGenreService],
})
export class SingleRecommendedComponent implements OnInit {
  comedyData = this.service.genreAnimeListSignal;
  genre = this.activatedRoute.snapshot.params['genre'];

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: SingleGenreService
  ) {}

  ngOnInit() {
    this.service.getAnimeList(this.genre);
  }

  sortOnClick() {}
}
