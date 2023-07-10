import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-featured-book-recommended',
  templateUrl: './featured-book-recommended.component.html',
  styleUrls: ['./featured-book-recommended.component.scss'],
})
export class FeaturedBookRecommendedComponent {
  dataList = this.activatedRoute.snapshot.data['mangaList'];

  constructor(private activatedRoute: ActivatedRoute) {}
}
