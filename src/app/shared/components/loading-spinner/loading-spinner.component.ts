import { Component } from '@angular/core';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss'],
})
export class LoadingSpinnerComponent {
  constructor(public loader: LoaderService) {}
}
