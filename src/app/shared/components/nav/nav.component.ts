import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  dataLinks:{title:string; dropdown: string; dropdown1: string; dropdown2: string;}[] = [
    {
      title: "READ",
      dropdown: "Manga",
      dropdown1: "Novel",
      dropdown2: "Most popular",
    },
    {
      title: "WATCH",
      dropdown: "Anime",
      dropdown1: "Trailer",
      dropdown2: "Best rated anime",
    },
    {
      title: "COMMUNITY",
      dropdown: "Fan arts",
      dropdown1: "Forum",
      dropdown2: "Discuss",
    },
    {
      title: "CALENDAR",
      dropdown: "Upcoming",
      dropdown1: "Best of this year",
      dropdown2: "Upcoming events",
    },
  ];
  scrollTo() {
    scrollTo({top:0, behavior:"smooth"})
  }
  date:any = new Date().toLocaleTimeString();

  constructor(){
    setInterval(() =>{
      const currentDate = new Date();
      this.date = currentDate.toLocaleTimeString();
    }, 1000);
  }

  isMenuOpened: boolean = false;
  clickedIndex: number = -1;

  // toggleMenu(): void {
  //   this.isMenuOpened = !this.isMenuOpened
  // }

  clickedOutside(): void {
    this.clickedIndex = -1
  }
}
