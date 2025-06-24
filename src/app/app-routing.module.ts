import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerAuthGuard } from './seller-auth.guard';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { UpdateSellerProductComponent } from './update-seller-product/update-seller-product.component';
import { ViewSingleProductComponent } from './view-single-product/view-single-product.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { UserAuthComponent } from './user-auth/user-auth.component';


const routes: Routes = [
 {
    path:'',
    component:HomeComponent
 },
 {
    path:'seller-auth',
    component:SellerAuthComponent
 },
 {
   path:'seller-home',
   component: SellerHomeComponent,
   canActivate:[SellerAuthGuard]
 },
 {
  path:'seller-add-product',
  component:SellerAddProductComponent,
  canActivate:[SellerAuthGuard]
 },
 {
  path:'seller-update-product/:id',
  component: UpdateSellerProductComponent,
  canActivate:[SellerAuthGuard]
 },
{ path:'view-product/:productId',
  component:ViewSingleProductComponent
},
{path:'search/:query',
  component: SearchPageComponent
},
{
  path:'user-auth',
  component: UserAuthComponent,
  canActivate: [SellerAuthGuard]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
