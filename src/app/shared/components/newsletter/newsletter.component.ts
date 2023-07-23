import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss'],
})
export class NewsletterComponent {
  constructor(private http: HttpClient) {}

  sendEmail(inputData: { email: string }) {
    this.http
      .post(
        'https://anime-project-newsletter-default-rtdb.firebaseio.com/emails.json',
        inputData
      )
      .subscribe((val) => {
        console.log(val);
      });
  }
}
