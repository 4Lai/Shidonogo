import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FooterDataService {
  constructor() {}

  footerDataLink: FooterDataInterface[] = [
    {
      id: 0,
      text: 'About us',
      url: '/about-us',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, ipsam tempora. Fugiat, doloremque numquam cum a nemo, quos saepe, corrupti porro voluptatibus veritatis blanditiis fuga. Doloribus fugit eum saepe, doloremque voluptatum nemo facilis corrupti maxime ut asperiores nisi omnis architecto, beatae delectus, ratione sed. Non deserunt voluptate voluptates tempora similique.',
    },
    {
      id: 1,
      text: 'Contact us',
      url: '/contact-us',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, ipsam tempora. Fugiat, doloremque numquam cum a nemo, quos saepe, corrupti porro voluptatibus veritatis blanditiis fuga. Doloribus fugit eum saepe, doloremque voluptatum nemo facilis corrupti maxime ut asperiores nisi omnis architecto, beatae delectus, ratione sed. Non deserunt voluptate voluptates tempora similique.',
    },
    {
      id: 2,
      text: 'FAQ',
      url: '/FAQ',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, ipsam tempora. Fugiat, doloremque numquam cum a nemo, quos saepe, corrupti porro voluptatibus veritatis blanditiis fuga. Doloribus fugit eum saepe, doloremque voluptatum nemo facilis corrupti maxime ut asperiores nisi omnis architecto, beatae delectus, ratione sed. Non deserunt voluptate voluptates tempora similique.',
    },
    {
      id: 3,
      text: 'Copyrights',
      url: '/copyrights',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, ipsam tempora. Fugiat, doloremque numquam cum a nemo, quos saepe, corrupti porro voluptatibus veritatis blanditiis fuga. Doloribus fugit eum saepe, doloremque voluptatum nemo facilis corrupti maxime ut asperiores nisi omnis architecto, beatae delectus, ratione sed. Non deserunt voluptate voluptates tempora similique.',
    },
    {
      id: 4,
      text: 'Privacy Policy',
      url: '/privacy-policy',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, ipsam tempora. Fugiat, doloremque numquam cum a nemo, quos saepe, corrupti porro voluptatibus veritatis blanditiis fuga. Doloribus fugit eum saepe, doloremque voluptatum nemo facilis corrupti maxime ut asperiores nisi omnis architecto, beatae delectus, ratione sed. Non deserunt voluptate voluptates tempora similique.',
    },
    {
      id: 5,
      text: 'Terms of Use',
      url: '/terms-of-use',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, ipsam tempora. Fugiat, doloremque numquam cum a nemo, quos saepe, corrupti porro voluptatibus veritatis blanditiis fuga. Doloribus fugit eum saepe, doloremque voluptatum nemo facilis corrupti maxime ut asperiores nisi omnis architecto, beatae delectus, ratione sed. Non deserunt voluptate voluptates tempora similique.',
    },
  ];
}

export interface FooterDataInterface {
  id: number;
  text: string;
  url: string;
  content: string;
}
