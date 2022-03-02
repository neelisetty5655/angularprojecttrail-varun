import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { CartComponent } from './cart/cart.component';
import {DatetimeService} from  '././datetime.service';
import { InformationService } from '././information.service';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveAddressFormComponent } from './reactive-address-form/reactive-address-form.component';
import { HttpDataRequestService } from './http-data-request.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    CartComponent,
    ReactiveformComponent,
    ReactiveAddressFormComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DatetimeService,InformationService,HttpDataRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
