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
import { FilterPipe } from './FilterPipe/filter.pipe';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { BasketComponent } from './basket/basket.component';
import { RouterModule, Routes } from '@angular/router';

import { CustomerformComponent } from './customerform/customerform.component';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { TemplateformComponent } from './templateform/templateform.component';


export const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'basket', component: BasketComponent },
  ];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductComponentComponent,
    BorderCardDirective,
    FilterPipe,
    HomeComponent,
    BasketComponent,
    TemplateformComponent,
    CustomerformComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
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
