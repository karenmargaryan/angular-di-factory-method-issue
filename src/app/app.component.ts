import {Component} from '@angular/core';
import {Payment} from './payment/payment.interface';
import {PaypalPayment} from './payment/paypal-payment';
import {PaymentService} from './service/payment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'di-via-interfaces-issue';

  constructor(private paymentService: PaymentService) {
    paymentService.pay(999);
  }
}
