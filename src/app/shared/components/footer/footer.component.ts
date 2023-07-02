import { Component } from '@angular/core';
import { FooterDataService } from '../../services/footer-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  dataService = this.data;
  constructor(private data: FooterDataService) {}
}
