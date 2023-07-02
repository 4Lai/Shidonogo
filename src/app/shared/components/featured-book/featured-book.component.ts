import { Component } from '@angular/core';
import { FeaturedBookDataService } from '../../services/featured-book-data.service';

@Component({
  selector: 'app-featured-book',
  templateUrl: './featured-book.component.html',
  styleUrls: ['./featured-book.component.scss'],
})
export class FeaturedBookComponent {
  dataService = this.data;
  constructor(private data: FeaturedBookDataService) {}
}
