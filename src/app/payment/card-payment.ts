import {Payment} from './payment.interface';
import {Injectable} from '@angular/core';

@Injectable()
export class CardPayment implements Payment {
  pay(amount: number) {
    console.log('Paid by card. Amount=', amount);
  }
}
