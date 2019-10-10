import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MobilesComponent } from './pages/mobiles/mobiles.component';
import { MobileAccessoriesComponent } from './pages/mobile-accessories/mobile-accessories.component';
import { ClothingComponent } from './pages/clothing/clothing.component';
import { GroceriesComponent } from './pages/groceries/groceries.component';
import { OfferZoneComponent } from './pages/offer-zone/offer-zone.component';
import { HomeFurnitureComponent } from './pages/home-furniture/home-furniture.component';
import { HomeAppliancesComponent } from './pages/home-appliances/home-appliances.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatStepperModule} from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {  MatInputModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SearchPipe } from './search.pipe';
import { MobilesDetailsComponent } from './pages/mobiles-details/mobiles-details.component';
import { ClothingDetailsComponent } from './pages/clothing-details/clothing-details.component';
import { GroceriesDetailsComponent } from './pages/groceries-details/groceries-details.component';
import { CartComponent } from './pages/cart/cart.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { CheckoutComponent } from './pages/checkout/checkout.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MobilesComponent,
    MobileAccessoriesComponent,
    ClothingComponent,
    GroceriesComponent,
    OfferZoneComponent,
    HomeFurnitureComponent,
    HomeAppliancesComponent,
    SearchPipe,
    MobilesDetailsComponent,
    ClothingDetailsComponent,
    GroceriesDetailsComponent,
    CartComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatInputModule,InfiniteScrollModule,NgxSpinnerModule,HttpClientModule,
    BrowserAnimationsModule,ReactiveFormsModule,MatIconModule,
    MatStepperModule,FormsModule,MatFormFieldModule,MatButtonModule,MatSliderModule,MatCheckboxModule,
    MatExpansionModule,
    CarouselModule.forRoot(),
    TypeaheadModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
