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
      title: 'COMMUNITY',
      url: '',
    },
    {
      title: 'CALENDAR',
      url: '',
    },
  ];
}
export interface NavigationDataInterface {
  title: string;
  url: string;
}
