import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componenets/pages/home/home.component';
import { ItemPageComponent } from './componenets/pages/item-page/item-page.component';
import { CartPageComponent } from './componenets/pages/cart-page/cart-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'search/searchTerm', component: HomeComponent},
  {path: 'item/:id', component: ItemPageComponent},
  {path: 'cart-page', component: CartPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
