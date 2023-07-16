import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationDataService } from '../../services/navigation-data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  isMenuOpened: boolean = false;
  navigationData = this.navData.dataLinks;
  clickedIndex: number = -1;
  date: any = new Date().toLocaleTimeString();

  constructor(private router: Router, private navData: NavigationDataService) {}

  toggleMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;
  }

  scrollTo() {
    if (this.router.url === '/home') {
      scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      this.router.navigate(['/home']);
    }
  }

  ngOnInit(): void {
    setInterval(() => {
      const currentDate = new Date();
      this.date = currentDate.toLocaleTimeString();
    }, 1000);
  }
}
