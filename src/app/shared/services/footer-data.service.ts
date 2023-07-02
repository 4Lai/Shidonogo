import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FooterDataService {
  constructor() {}
  footerDataLink: FooterDataInterface[] = [
    {
      text: 'About us',
      url: '##',
    },
    {
      text: 'Contact us',
      url: '##',
    },
    {
      text: 'FAQ',
      url: '##',
    },
    {
      text: 'Copyrights',
      url: '##',
    },
    {
      text: 'Privacy Policy',
      url: '##',
    },
    {
      text: 'Terms of Use',
      url: '##',
    },
    {
      text: 'Twitter',
      url: '##',
    },
    {
      text: 'Facebook',
      url: '##',
    },
  ];
}

export interface FooterDataInterface {
  text: string;
  url: string;
}
