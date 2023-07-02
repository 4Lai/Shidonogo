import { Component } from '@angular/core';
import { BooksRecommendedDataService } from '../../services/books-recommended-data.service';

@Component({
  selector: 'app-books-recomended',
  templateUrl: './books-recomended.component.html',
  styleUrls: ['./books-recomended.component.scss'],
})
export class BooksRecomendedComponent {
  dataService = this.data;
  constructor(private data: BooksRecommendedDataService) {}
}
