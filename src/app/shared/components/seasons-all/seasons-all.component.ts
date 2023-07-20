import { Component, OnInit } from '@angular/core';
import { seasonInterface } from '../../services/seasons.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seasons-all',
  templateUrl: './seasons-all.component.html',
  styleUrls: ['./seasons-all.component.scss'],
})
export class SeasonsAllComponent {
  seasonNow: seasonInterface = this.activatedRoute.snapshot.data['seasonNow'];
  seasonUpcoming: seasonInterface =
    this.activatedRoute.snapshot.data['seasonUpcoming'];

  constructor(private activatedRoute: ActivatedRoute) {}

}
