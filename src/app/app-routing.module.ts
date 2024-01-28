import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componenets/pages/home/home.component';
import { ItemPageComponent } from './componenes/pages/item-page/item-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'search/searchTerm', component: HomeComponent},
  {path: 'item/:id', component: ItemPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
