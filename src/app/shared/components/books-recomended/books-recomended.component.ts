import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-books-recomended',
  templateUrl: './books-recomended.component.html',
  styleUrls: ['./books-recomended.component.scss'],
})
export class BooksRecomendedComponent implements OnInit {
  dataService: any = this.activateRoute.snapshot.data['data'].slice(0, 4);

  constructor(private route: Router, private activateRoute: ActivatedRoute) {}

  ngOnInit() {}

  navigate(id: number) {
    this.route.navigate([`manga-list/${id}`]);
  }
}
