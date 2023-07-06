import { Component, Input } from '@angular/core';
import { FeaturedBookInterface } from '../../services/featured-book-recommended.service';

@Component({
  selector: 'app-featured-book',
  templateUrl: './featured-book.component.html',
  styleUrls: ['./featured-book.component.scss'],
})
export class FeaturedBookComponent {
  expanded: boolean = false;
  @Input({ required: true }) featuredBook: FeaturedBookInterface;

  expandDesc() {
    this.expanded = !this.expanded;
  }
}
