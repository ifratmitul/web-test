import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductComponent } from './product/product.component';
import { ProductItemComponent } from './product/product-item/product-item.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ProductInterceptor } from './product/product.interceptor';
import { ModalPopupComponent } from './modal-popup/modal-popup.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,

    ProductComponent,
    ProductItemComponent,
    FooterComponent,
    ModalPopupComponent,
    HeroComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: ProductInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
