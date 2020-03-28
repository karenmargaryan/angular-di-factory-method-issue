import {Payment} from './payment.interface';
import {Injectable} from '@angular/core';

export class PaypalPayment implements Payment {
  pay(amount: number) {
    console.log('Paid via Paypal. Amount=', amount);
  }
}
