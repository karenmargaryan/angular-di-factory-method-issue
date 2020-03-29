import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PaypalPayment} from './payment/paypal-payment';
import {CardPayment} from './payment/card-payment';
import {PaymentService} from './service/payment.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    PaypalPayment,
    CardPayment,
    {
      provide: PaymentService,
      useFactory: () => {
        return new PaymentService(new CardPayment());
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
