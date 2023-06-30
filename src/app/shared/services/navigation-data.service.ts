import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavigationDataService {
  constructor() {}
  dataLinks: NavigationDataInterface[] = [
    {
      title: 'READ',
    },
    {
      title: 'WATCH',
    },
    {
      title: 'COMMUNITY',
    },
    {
      title: 'CALENDAR',
    },
  ];
}
export interface NavigationDataInterface {
  title: string;
}
