import {Payment} from './payment.interface';
import {Injectable} from '@angular/core';

export class CardPayment implements Payment {
  pay(amount: number) {
    console.log('Paid by card. Amount=', amount);
  }
}
