import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  dataLinks:{url:string;title:string}[] = [
    {
      url: "#READ",
      title: "READ",
    },
    {
      url: "#WATCH",
      title: "WATCH",
    },
    {
      url: "#COMMUNITY",
      title: "COMMUNITY",
    },
    {
      url: "#CALENDAR",
      title: "CALENDAR",
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
}
