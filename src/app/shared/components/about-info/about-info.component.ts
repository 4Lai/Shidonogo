import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about-info',
  templateUrl: './about-info.component.html',
  styleUrls: ['./about-info.component.scss'],
})
export class AboutInfoComponent {
  infoData = this.activatedRoute.snapshot.data['info'];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.infoData);
  }
}
