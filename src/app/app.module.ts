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
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatInputModule,
    BrowserAnimationsModule,ReactiveFormsModule,MatIconModule,
    MatStepperModule,FormsModule,MatFormFieldModule,MatButtonModule,MatSliderModule,MatCheckboxModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
