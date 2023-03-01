import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  footerDataLink: {text:string; url:string;}[] = [
    {
      text: 'About us',
      url: '##'
    },
    {
      text: 'Contact us',
      url: '##'
    },
    {
      text: 'FAQ',
      url: '##'
    },
    {
      text:'Copyrights',
      url: '##',
    },
    {
      text: 'Privacy Policy',
      url: '##'
    },
    {
      text: 'Terms of Use',
      url: '##'
    },
    {
      text: 'Twitter',
      url: '##'
    },
    {
      text: 'Facebook',
      url: '##'
    }
  ]

}
