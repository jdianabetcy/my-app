import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CustomerViewListComponent } from './customer-view-list/customer-view-list.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SalesProductListComponent } from './sales-product-list/sales-product-list.component';
import { SideMenuComponent } from './side-menu/side-menu.component';

import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './authentication/authentication.service';
import { AuthenticationGuard } from './authentication/authentication.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerViewListComponent,
    ContactUsComponent,
    HeaderComponent,
    LoginFormComponent,
    SalesProductListComponent,
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthenticationService,AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
