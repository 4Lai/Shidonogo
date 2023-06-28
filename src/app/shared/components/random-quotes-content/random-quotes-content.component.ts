import { Component, Input } from '@angular/core';
import { RandomQuoteInterface } from '../../services/random-quotes.service';

@Component({
  selector: 'app-random-quotes-content',
  templateUrl: './random-quotes-content.component.html',
  styleUrls: ['./random-quotes-content.component.scss'],
})
export class RandomQuotesContentComponent {
  @Input() myData: RandomQuoteInterface;
}
