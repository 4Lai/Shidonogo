import { Component, Input, OnInit } from '@angular/core';
import { FeaturedBookInterface } from '../../services/featured-book-recommended.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-featured-book',
  templateUrl: './featured-book.component.html',
  styleUrls: ['./featured-book.component.scss'],
})
export class FeaturedBookComponent implements OnInit {
  expanded: boolean = false;
  curRoute: string = '';
  @Input({ required: true }) featuredBook: FeaturedBookInterface;

  constructor(private route: Router) {}

  ngOnInit(): void {
    this.curRoute = this.route.url;
  }

  expandDesc() {
    this.expanded = !this.expanded;
  }
}
