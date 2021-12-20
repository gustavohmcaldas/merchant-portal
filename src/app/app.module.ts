import { NotificationModule } from './notification-module';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from './service/authentication.service';
import { AuthenticationGuard } from './guard/authentication.guard';
import { NotificationService } from './service/notification.service';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MerchantComponent } from './components/merchant/merchant.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MerchantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NotificationModule,
    FormsModule,
    BrowserAnimationsModule,
    MatRadioModule
  ],
  providers: [NotificationService, AuthenticationGuard, AuthenticationService, 
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
