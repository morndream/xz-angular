import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {path:'',component:IndexComponent},
  // {path:'index',component:IndexComponent},
  {path:'product-list',component:ProductListComponent},
  {path:'product-detail/:pid',component:ProductDetailComponent},
  {path:'cart',component:CartComponent},
  {path:'login',component:LoginComponent},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
