import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-featured-book',
  templateUrl: './featured-book.component.html',
  styleUrls: ['./featured-book.component.scss'],
})
export class FeaturedBookComponent implements OnInit {
  expanded: boolean = false;
  curRoute: string = '';
  id: string;
  @Input({ required: true }) featuredBook: any;

  constructor(private route: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.curRoute = this.route.url;
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  expandDesc() {
    this.expanded = !this.expanded;
  }
}
