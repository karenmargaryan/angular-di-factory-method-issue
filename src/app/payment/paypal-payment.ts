import {Payment} from './payment.interface';
import {Injectable} from '@angular/core';

@Injectable()
export class PaypalPayment implements Payment {
  pay(amount: number) {
    console.log('Paid via Paypal. Amount=', amount);
  }
}
