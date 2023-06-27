import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  dataLinks: {
    title: string;
    dropdown: string;
    dropdown1: string;
    dropdown2: string;
  }[] = [
    {
      title: 'READ',
      dropdown: 'Manga',
      dropdown1: 'Novel',
      dropdown2: 'Most popular',
    },
    {
      title: 'WATCH',
      dropdown: 'Anime',
      dropdown1: 'Trailer',
      dropdown2: 'Best rated anime',
    },
    {
      title: 'COMMUNITY',
      dropdown: 'Fan arts',
      dropdown1: 'Forum',
      dropdown2: 'Discuss',
    },
    {
      title: 'CALENDAR',
      dropdown: 'Upcoming',
      dropdown1: 'Best of this year',
      dropdown2: 'Upcoming events',
    },
  ];

  constructor(private router: Router) {}

  scrollTo() {
    if (this.router.url === '/home') {
      window.location.reload();
    } else {
      this.router.navigate(['/home']);
    }
  }
  date: any = new Date().toLocaleTimeString();

  ngOnInit(): void {
    setInterval(() => {
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
    this.clickedIndex = -1;
  }
}
