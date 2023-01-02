import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterOutlet} from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DefaultModule} from "./layouts/default/default.module";
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './modules/about/about.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        BrowserModule,
        RouterOutlet,
        BrowserAnimationsModule,
        DefaultModule,
        AppRoutingModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
