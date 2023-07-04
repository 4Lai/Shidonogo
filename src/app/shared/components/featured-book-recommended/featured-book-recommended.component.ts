import { Component, OnInit } from '@angular/core';
import { FeaturedBookRecommendedService } from '../../services/featured-book-recommended.service';
import { sortByInt } from '../../helpers/sort-by';

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
    this.service.getData().subscribe((val) => {
      this.data = val;
    });
  }

  sortOnClick() {
    this.swtichSort = !this.swtichSort;
    console.log(this.data);
    sortByInt(this.data, '', this.swtichSort);
  }
}
