import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeFr from '@angular/common/locales/fr';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasketComponent } from './basket/basket.component';
import { BorderCardDirective } from './border-card.directive';
import { CustomerformComponent } from './customerform/customerform.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ProductComponentComponent } from './product-component/product-component.component';
import { ProductfilterPipe } from './Productfilter/productfilter.pipe';
import { CustomerService } from './services/customer.service';
import { ProductService } from './services/product.service';
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
    HomeComponent,
    BasketComponent,
    TemplateformComponent,
    CustomerformComponent,
    ProductfilterPipe,
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
    { provide: 'Welcome', useValue: 'welcome to Zenika' },
    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
registerLocaleData(localeFr, 'fr');
