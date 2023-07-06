import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeaturedBookInterface } from 'src/app/shared/services/featured-book-recommended.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  trendingData: FeaturedBookInterface = this.activatedRoute.snapshot.data[
    'data'
  ].slice(3, -1)[Math.floor(Math.random() * 6)];
  constructor(private activatedRoute: ActivatedRoute) {}
}
