import { Component } from '@angular/core';
import { PopUpService } from '../../services/pop-up.service';
import { IframeComponent } from '../iframe/iframe.component';

@Component({
  selector: 'app-featured-manga',
  templateUrl: './featured-manga.component.html',
  styleUrls: ['./featured-manga.component.scss'],
})
export class FeaturedMangaComponent {
  constructor(private popUpService: PopUpService) {}

  featuredMangaLinkData: {
    title: string;
    url: string;
    cssClasses: string;
    genre: string;
  }[] = [
    {
      title: 'SHONEN JUMP',
      url: '/anime-list/shonen-jump',
      cssClasses: 'featured--links-shonen',
      genre: 'shonen',
    },
    {
      title: 'Comedy',
      url: '/anime-list/comedy',
      cssClasses: 'featured--links',
      genre: 'comedy',
    },
    {
      title: 'Romance',
      url: '/anime-list/romance',
      cssClasses: 'featured--links',
      genre: 'romance',
    },
    {
      title: 'Music',
      url: '/anime-list/music',
      cssClasses: 'featured--links',
      genre: 'music',
    },
    {
      title: 'Adventure',
      url: '/anime-list/adventure',
      cssClasses: 'featured--links',
      genre: 'adventure',
    },
  ];

  featuredMangaRestData: {
    title: string;
    subtitle: string;
    readMore: string;
  }[] = [
    {
      title: 'DEMON SLAYER',
      subtitle:
        'Tanjiro became a Demon Slayer to save his sister and clear world from monsters!',
      readMore:
        'It is a Japanese manga series written and illustrated by Koyoharu Gotōge, and it is about Tanjiro Kamado, a young boy who becomes a demon slayer after his family is slaughtered and his younger sister Nezuko is turned into a demon.',
    },
  ];

  divToggle = true;
  isIcon = false;
  isIconUp = true;

  featuredReadToggle() {
    this.divToggle = !this.divToggle;
    this.isIcon = !this.isIcon;
    this.isIconUp = !this.isIconUp;
  }

  open() {
    this.popUpService.openModal(IframeComponent);
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  }
}
