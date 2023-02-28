import { Component } from '@angular/core';

@Component({
  selector: 'app-books-recomended',
  templateUrl: './books-recomended.component.html',
  styleUrls: ['./books-recomended.component.scss']
})
export class BooksRecomendedComponent {
   booksRecomendedData:{name:string, title:string, img:string}[] = [
    {
      name: "Novel",
      title: "Demon Slayer: Kimetsu no Yaiba—One-Winged Butterfly",
      img: "assets/img/imgg/1.jpg",
    },
    {
      name: "Activity Book",
      title: "Demon Slayer: Kimetsu no Yaiba: The Official Coloring Book",
      img: "assets/img/imgg/2.jpg",
    },
    {
      name: "Manga",
      title: "Demon Slayer: Kimetsu no Yaiba—Stories of Water and Flame",
      img: "assets/img/imgg/3.jpg",
    },
    {
      name: "Manga",
      title: "Demon Slayer: Kimetsu no Yaiba, Vol. 1",
      img: "assets/img/imgg/4.jpg",
    },
  ];

   booksRecomendedDataTitle:{h:string, linkText:string}[] = [
    {
      h: "Other Demon Slayer books",
      linkText: "See more >",
    },
  ];
}
