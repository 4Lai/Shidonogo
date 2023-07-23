import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seasons-details',
  templateUrl: './seasons-details.component.html',
  styleUrls: ['./seasons-details.component.scss'],
})
export class SeasonsDetailsComponent {
  seasonDetails: any = this.activateRoute.snapshot.data['details'];

  constructor(private activateRoute: ActivatedRoute) {}
}
