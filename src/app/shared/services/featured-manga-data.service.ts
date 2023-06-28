import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FeaturedMangaDataService {
  constructor() {}

  featuredMangaLinkData: featuredMangaDataInterface[] = [
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

  featuredMangaRestData: featuredMangaDataRestInterface[] = [
    {
      title: 'DEMON SLAYER',
      subtitle:
        'Tanjiro became a Demon Slayer to save his sister and clear world from monsters!',
      readMore:
        'It is a Japanese manga series written and illustrated by Koyoharu Gotōge, and it is about Tanjiro Kamado, a young boy who becomes a demon slayer after his family is slaughtered and his younger sister Nezuko is turned into a demon.',
    },
  ];
}
export interface featuredMangaDataInterface {
  title: string;
  url: string;
  cssClasses: string;
  genre: string;
}
export interface featuredMangaDataRestInterface {
  title: string;
  subtitle: string;
  readMore: string;
}
