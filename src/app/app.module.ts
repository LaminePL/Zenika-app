import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ProductComponentComponent } from './product-component/product-component.component';
import { BorderCardDirective } from './border-card.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';

import{CustomerService} from './services/customer.service';
import{ProductService} from './services/product.service';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from "@angular/common/locales/fr";
import { CustomPipe } from './CustomPipe/filter.pipe';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductComponentComponent,
    BorderCardDirective,
    CustomPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [
    CustomerService,
    ProductService,
    {provide: "Welcome", useValue: "welcome to Zenika"},
    {provide: LOCALE_ID, useValue: 'fr-FR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

registerLocaleData(localeFr, "fr");
