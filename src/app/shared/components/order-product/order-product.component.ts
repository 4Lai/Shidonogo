import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-product',
  templateUrl: './order-product.component.html',
  styleUrls: ['./order-product.component.scss'],
})
export class OrderProductComponent {
  orderNow: any = this.activatedRoute.snapshot.data['order'];

  constructor(private activatedRoute: ActivatedRoute) {}

  orderData = new FormGroup({
    name: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    phone: new FormControl('', [
      Validators.required,
      // Validators.pattern('[0-9]{3}-[0-9]{3}-[0-9]{4}'),
    ]),
    street: new FormControl('', [Validators.required]),
    houseNumber: new FormControl('', [Validators.required]),
    zipCode: new FormControl('', [Validators.required]),
    place: new FormControl('', [Validators.required]),
  });

  checkData() {}

  get name() {
    return this.orderData.get('name');
  }
  get lastName() {
    return this.orderData.get('lastName');
  }
  get email() {
    return this.orderData.get('email');
  }
  get phone() {
    return this.orderData.get('phone');
  }
  get street() {
    return this.orderData.get('street');
  }
  get houseNumber() {
    return this.orderData.get('houseNumber');
  }
  get zipCode() {
    return this.orderData.get('zipCode');
  }
  get place() {
    return this.orderData.get('place');
  }
}
