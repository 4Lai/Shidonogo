import { Component, ViewChild } from '@angular/core';
import {
  RandomQuoteInterface,
  RandomQuotesService,
} from '../../services/random-quotes.service';
import { take } from 'rxjs';
import { RandomQuotesDataService } from '../../services/random-quotes-data.service';

@Component({
  selector: 'app-random-quotes',
  templateUrl: './random-quotes.component.html',
  styleUrls: ['./random-quotes.component.scss'],
})
export class RandomQuotesComponent {
  @ViewChild('action') h5: any;
  dataService = this.dataHtml;

  constructor(
    private randomQuotesService: RandomQuotesService,
    private dataHtml: RandomQuotesDataService
  ) {}

  myData: RandomQuoteInterface;

  randomQuotes() {
    this.randomQuotesService
      .getRandomQuotesData()
      .pipe(take(1))
      .subscribe((data) => {
        this.myData = data;
      });
    document.querySelector(
      `.random-quotes--header-container--action`
    )!.textContent = 'Try again!';
  }
}
