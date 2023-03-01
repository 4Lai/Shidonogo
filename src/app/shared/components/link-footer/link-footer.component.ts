import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-link-footer',
  templateUrl: './link-footer.component.html',
  styleUrls: ['./link-footer.component.scss']
})
export class LinkFooterComponent {
@Input() Hero:any;
}
