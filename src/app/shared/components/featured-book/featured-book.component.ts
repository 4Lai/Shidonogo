import { Component } from '@angular/core';

@Component({
  selector: 'app-featured-book',
  templateUrl: './featured-book.component.html',
  styleUrls: ['./featured-book.component.scss'],
})
export class FeaturedBookComponent {
  featuredBookData:{h3:string, imgUrl:string, p:string, h4:string, btn:string }[] = [
    {
      h3: "Read Kimetsu no Yaiba manga",
      imgUrl: "assets/img/Manga.webp",
      p: "Demon Slayer: Kimetsu No Yaiba, Volume 20 continues as the Demon Slayer Corps' initial confrontation with the most powerful of Muzan's demons, Kokushibo, has left Tokito severely wounded and Genya cut in half. Miraculously Genya is still alive hoping that his regenerative power can heal even his fatal wound.",
      h4: "Demon Slayer: Volume 20",
      btn: "Order now",
    },
  ];
}
