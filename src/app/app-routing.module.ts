import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MobilesComponent } from './pages/mobiles/mobiles.component';
import { ClothingComponent } from './pages/clothing/clothing.component';
import { GroceriesComponent } from './pages/groceries/groceries.component';
import { MobileAccessoriesComponent } from './pages/mobile-accessories/mobile-accessories.component';
import { HomeAppliancesComponent } from './pages/home-appliances/home-appliances.component';
import { HomeFurnitureComponent } from './pages/home-furniture/home-furniture.component';
import { OfferZoneComponent } from './pages/offer-zone/offer-zone.component';
import { MobilesDetailsComponent } from './pages/mobiles-details/mobiles-details.component';
import { ClothingDetailsComponent } from './pages/clothing-details/clothing-details.component';
import { GroceriesDetailsComponent } from './pages/groceries-details/groceries-details.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: "full"},
  {path: 'mobiles', component: MobilesComponent},
  {path: 'clothing', component: ClothingComponent},
  {path: 'groceries', component: GroceriesComponent},
  {path: 'mobile-accessories', component: MobileAccessoriesComponent},
  {path: 'home-appliances', component: HomeAppliancesComponent},
  {path: 'home-furniture', component: HomeFurnitureComponent},
  {path: 'offer-zone', component: OfferZoneComponent},
  {path: 'mobiles-details', component: MobilesDetailsComponent},
  {path: 'clothing-details', component: ClothingDetailsComponent},
  {path: 'groceries-details', component: GroceriesDetailsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'checkout', component: CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
