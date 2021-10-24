import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';

import { BackgroundThemeDirective } from './background-theme.directive';

import { ProductThumbComponent } from './product-thumb/product-thumb.component';
import { FeaturedMainComponent } from './featured-main/featured-main.component';

import { PinValidatorDirective } from './cart-form/validators/pinValidator'
import { CardValidatorDirective } from './cart-form/validators/cardValidator'
import { EmailValidatorDirective } from './cart-form/validators/emailValidator'

import { CartFormComponent } from './cart-form/cart-form.component'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CartComponent,
    HomeComponent,
    ProductComponent,
    BackgroundThemeDirective,
    ProductThumbComponent,
    FeaturedMainComponent,
    CartFormComponent,
    PinValidatorDirective,
    CardValidatorDirective,
    EmailValidatorDirective
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
