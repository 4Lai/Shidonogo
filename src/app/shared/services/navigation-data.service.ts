import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavigationDataService {
  constructor() {}
  dataLinks: NavigationDataInterface[] = [
    {
      title: 'READ',
      url: '/manga-list',
    },
    {
      title: 'WATCH',
      url: '/anime-list/Romance',
    },
    {
      title: 'CHARACTERS',
      url: '/top-characters',
    },
    {
      title: 'SEASONS',
      url: '/seasons',
    },
  ];
}
export interface NavigationDataInterface {
  title: string;
  url: string;
}
