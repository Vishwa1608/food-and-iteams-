import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodcreateComponent } from './foodcreate/foodcreate.component';
import { FoodlistComponent } from './foodlist/foodlist.component';
import { FooddetailsComponent } from './fooddetails/fooddetails.component';
import { FoodeditComponent } from './foodedit/foodedit.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FoodService } from './food.service';

@NgModule({
  declarations: [
    AppComponent,
    FoodcreateComponent,
    FoodlistComponent,
    FooddetailsComponent,
    FoodeditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
