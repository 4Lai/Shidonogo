import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SingleGenreService } from '../../services/single-genre.service';
import { ChangeDetectionStrategy } from '@angular/core';
import { sortByInt } from '../../helpers/sort-by';

@Component({
  selector: 'app-single-recommended',
  templateUrl: './single-recommended.component.html',
  styleUrls: ['./single-recommended.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SingleGenreService],
})
export class SingleRecommendedComponent implements OnInit {
  comedyData = this.service.genreAnimeListSignal.asReadonly();
  genre = this.activatedRoute.snapshot.params['genre'];
  swtichSort: boolean = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: SingleGenreService
  ) {}

  ngOnInit() {
    this.service.getAnimeList(this.genre);
  }

  sortOnClick() {
    this.swtichSort = !this.swtichSort;
    this.service.genreAnimeListSignal.set(
      sortByInt(this.service.genreAnimeListSignal(), 'score', this.swtichSort)
    );
  }
}
