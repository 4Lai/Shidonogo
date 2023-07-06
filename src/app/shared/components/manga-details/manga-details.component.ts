import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manga-details',
  templateUrl: './manga-details.component.html',
  styleUrls: ['./manga-details.component.scss'],
})
export class MangaDetailsComponent implements OnInit {
  trendingData: any = this.activatedRoute.snapshot.data['data'];
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {}
}
