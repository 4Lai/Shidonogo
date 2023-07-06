import { Component, OnInit } from '@angular/core';
import { FeaturedBookRecommendedService } from '../../services/featured-book-recommended.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books-recomended',
  templateUrl: './books-recomended.component.html',
  styleUrls: ['./books-recomended.component.scss'],
})
export class BooksRecomendedComponent implements OnInit {
  dataService: any[] = [];
  constructor(
    private data: FeaturedBookRecommendedService,
    private route: Router
  ) {}

  ngOnInit() {
    this.data.getData().subscribe((val) => {
      this.dataService = val.data.slice(0, 4);
    });
  }
  navigate() {
    this.route.navigate(['manga-list/id']);
  }
}
