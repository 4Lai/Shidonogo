import { StepperOrientation } from '@angular/cdk/stepper';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import { FeaturedBookSingleInterface } from '../../services/featured-book-recommended.service';

@Component({
  selector: 'app-order-product',
  templateUrl: './order-product.component.html',
  styleUrls: ['./order-product.component.scss'],
})
export class OrderProductComponent {
  orderNow: FeaturedBookSingleInterface =
    this.activatedRoute.snapshot.data['order'];
  stepperOrientation: Observable<StepperOrientation>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private breakPoint: BreakpointObserver
  ) {
    this.stepperOrientation = breakPoint
      .observe('(min-width: 500px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }

  orderData = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z][a-zA-Z ]+'),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z][a-zA-Z ]+'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]{3}-[0-9]{3}-[0-9]{3}'),
    ]),
    street: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z][a-zA-Z ]+'),
    ]),
    houseNumber: new FormControl('', [Validators.required]),
    zipCode: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]{2}-[0-9]{3}'),
    ]),
    place: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z][a-zA-Z ]+'),
    ]),
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
