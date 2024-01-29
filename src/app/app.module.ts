import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componenets/pages/home/home.component';
import { HeaderComponent } from './componenets/partials/header/header.component';
import { NgModule } from '@angular/core';
import { ItemPageComponent } from './componenets/pages/item-page/item-page.component';
import { CartPageComponent } from './componenets/pages/cart-page/cart-page.component';
import { TitleComponent } from './componenets/partials/title/title.component';

//import { RatingModule } from 'ng-starrating';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ItemPageComponent,
    CartPageComponent,
    TitleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    //RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }