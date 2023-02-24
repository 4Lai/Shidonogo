import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  getImgUrl(url: string) {
    return `<img  src="${url}" class="header__photo"></img>`;
  }
}
