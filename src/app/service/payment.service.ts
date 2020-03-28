import {Injectable} from '@angular/core';
import {Payment} from '../payment/payment.interface';
import {CardPayment} from '../payment/card-payment';
import {PaypalPayment} from '../payment/paypal-payment';

@Injectable()
export class PaymentService {

  constructor(private service: Payment) {
  }

  pay(amount: number) {
    console.log('Payment Service -> pay(...) is running');
    this.service.pay(amount);
  }
}
