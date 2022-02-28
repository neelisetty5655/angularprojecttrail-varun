import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { CartComponent } from './cart/cart.component';
import {DatetimeService} from  '././datetime.service';
import { InformationService } from '././information.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DatetimeService,InformationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
