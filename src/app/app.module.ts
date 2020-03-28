import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PaypalPayment} from './payment/paypal-payment';
import {CardPayment} from './payment/card-payment';
import {PaymentService} from './service/payment.service';
import {Payment} from './payment/payment.interface';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: PaymentService,
      deps: [PaypalPayment, CardPayment],
      useFactory: () => {
        return new PaymentService(new PaypalPayment());
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
