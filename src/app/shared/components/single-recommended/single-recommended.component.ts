import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  genreTypesData = this.service.genreTypes.asReadonly();
  genre = this.activatedRoute.snapshot.params['genre'];
  swtichSort: boolean = true;
  searchTitle: string = 'title';

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: SingleGenreService,
    private route: Router
  ) {}

  ngOnInit() {
    this.service.getAnimeList(this.genre);
    this.service.getGenreTypes();
  }

  sortOnClick() {
    this.swtichSort = !this.swtichSort;
    this.service.genreAnimeListSignal.set(
      sortByInt(this.service.genreAnimeListSignal(), 'score', this.swtichSort)
    );
  }

  loadDiffData(url: string) {
    this.service.getAnimeList(url);
    this.genre = url;
    this.route.navigate(['/anime-list/' + url]);
  }

  searchText: string = '';

  onSearchTextEntered(search: string) {
    this.searchText = search;
  }
}
