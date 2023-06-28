import { Component, ViewChild } from '@angular/core';
import {
  RandomQuoteInterface,
  RandomQuotesService,
} from '../../services/random-quotes.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-random-quotes',
  templateUrl: './random-quotes.component.html',
  styleUrls: ['./random-quotes.component.scss'],
})
export class RandomQuotesComponent {
  @ViewChild('action') h5: any;

  randomQuotesData: { title: string; action: string; img: string }[] = [
    {
      title: 'Random quotes from anime!',
      action: 'Click to draw',
      img: '/assets/img/imgggg/cube.png',
    },
  ];

  constructor(private randomQuotesService: RandomQuotesService) {}

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
  scroll(el: HTMLElement) {
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  }
}
