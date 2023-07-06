import { Component, OnInit } from '@angular/core';
import { FeaturedBookRecommendedService } from '../../services/featured-book-recommended.service';
import { sortByInte } from '../../helpers/sort-by';
import { map } from 'rxjs';

@Component({
  selector: 'app-featured-book-recommended',
  templateUrl: './featured-book-recommended.component.html',
  styleUrls: ['./featured-book-recommended.component.scss'],
})
export class FeaturedBookRecommendedComponent implements OnInit {
  data: any = [];
  swtichSort: boolean = true;

  constructor(private service: FeaturedBookRecommendedService) {}

  ngOnInit() {
    this.service
      .getData()
      .pipe(map((val) => val.data))
      .subscribe((val) => {
        this.data = val;
      });
  }

  sortOnClick() {
    this.swtichSort = !this.swtichSort;
    sortByInte(this.data, 'attributes', 'averageRating', this.swtichSort);
  }
}
