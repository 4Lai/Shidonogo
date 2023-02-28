import { Component } from '@angular/core';

@Component({
  selector: 'app-anime-recomended',
  templateUrl: './anime-recomended.component.html',
  styleUrls: ['./anime-recomended.component.scss']
})
export class AnimeRecomendedComponent {
  animeReccomendedHeaderData:{h:string, btn:string, urlButton:string}[] = [
    {
      h: "If you like Kimetsu no Yaiba, we reccomend:",
      btn: "See all >",
      urlButton: "#see",
    },
  ];
  animeReccomendedContainerData:{url:string, title:string, img:string}[] = [
    {
      url: "#",
      title: "Arifureta",
      img: "assets/img/imggg/111/1.webp",
    },
    {
      url: "#",
      title: "One Punch Man",
      img: "assets/img/imggg/111/2.jpg",
    },
    {
      url: "#",
      title: "Dragon Ball series",
      img: "assets/img/imggg/111/3.jpg",
    },
    {
      url: "#",
      title: "My Hero Academia",
      img: "assets/img/imggg/111/4.jpg",
    },
  ];
}
