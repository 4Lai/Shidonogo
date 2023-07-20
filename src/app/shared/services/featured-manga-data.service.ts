import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FeaturedMangaDataService {
  constructor() {}

  featuredMangaLinkData: featuredMangaDataInterface[] = [
    {
      title: 'SHOUNEN',
      url: '/anime-list/Shounen',
      cssClasses: 'featured--links-shonen',
      genre: 'shonen',
    },
    {
      title: 'Comedy',
      url: '/anime-list/Comedy',
      cssClasses: 'featured--links',
      genre: 'comedy',
    },
    {
      title: 'Romance',
      url: '/anime-list/Romance',
      cssClasses: 'featured--links',
      genre: 'romance',
    },
    {
      title: 'Music',
      url: '/anime-list/Music',
      cssClasses: 'featured--links',
      genre: 'music',
    },
    {
      title: 'Adventure',
      url: '/anime-list/Adventure',
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
