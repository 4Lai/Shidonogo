import { Component, Input } from '@angular/core';
import { PopUpService } from '../../services/pop-up.service';
import { IframeComponent } from '../iframe/iframe.component';
import { FeaturedMangaDataService } from '../../services/featured-manga-data.service';

@Component({
  selector: 'app-featured-manga',
  templateUrl: './featured-manga.component.html',
  styleUrls: ['./featured-manga.component.scss'],
})
export class FeaturedMangaComponent {
  constructor(
    private popUpService: PopUpService,
    private data: FeaturedMangaDataService
  ) {}

  divToggle = true;
  isIcon = false;
  isIconUp = true;
  dataFrom = this.data;

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

  loadDiffData() {}
}
