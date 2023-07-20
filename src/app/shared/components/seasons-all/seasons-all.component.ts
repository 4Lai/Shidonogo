import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  SeasonsService,
  seasonInterface,
} from '../../services/seasons.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seasons-all',
  templateUrl: './seasons-all.component.html',
  styleUrls: ['./seasons-all.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeasonsAllComponent {
  seasonNow: seasonInterface = this.activatedRoute.snapshot.data['seasonNow'];
  seasonUpcoming: seasonInterface =
    this.activatedRoute.snapshot.data['seasonUpcoming'];
  seasonBy = this.seasonService.seasonBy.asReadonly();
  isClicked: boolean = false;
  year: number;
  season: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private seasonService: SeasonsService
  ) {}

  loadDiffData(year: number, season: string) {
    this.seasonService.getSeasonBy(year, season);
    this.isClicked = true;
    this.year = year;
    this.season = season;
  }
}
