import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {
  MatFormFieldModule,
  MatInputModule,
} from  '@angular/material'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './pages/auth/auth.module';
import { RootTemplateComponent } from './pages/root-template/root-template.component';
import {SignOutComponent} from "./pages/auth/sign-out/sign-out.component";
import { DashboardComponent } from './pages/doctor/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    RootTemplateComponent,
    SignOutComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
