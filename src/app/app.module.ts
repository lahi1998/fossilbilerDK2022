import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from 'src/app/Components/login/login.component';
import { BindingComponent } from './Components/binding/binding.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarsComponent } from './Components/cars/cars.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BindingComponent,
    CarsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }







// til angular.jason i serve hvis der certifcat krav
//,
//"ssl": {
//  "browserTarget": "Angular-first:build:development",
//  "sslKey": "src/assets/CATest-client+4-key.pem",
//  "sslCert": "src/assets/CATest-client+4.pem"
//}