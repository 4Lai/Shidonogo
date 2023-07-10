import { Component, Input } from '@angular/core';
import { sortByInte } from '../../helpers/sort-by';

@Component({
  selector: 'app-trending-list-reusable',
  templateUrl: './trending-list-reusable.component.html',
  styleUrls: ['./trending-list-reusable.component.scss'],
})
export class TrendingListReusableComponent {
  @Input({ required: true }) trendingList: any;

  swtichSort: boolean = true;

  sortOnClick() {
    this.swtichSort = !this.swtichSort;

    sortByInte(
      this.trendingList,
      'attributes',
      'averageRating',
      this.swtichSort
    );
  }
}
