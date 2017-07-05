//Import components and modules here...

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { landingPageModule } from "app/landingPage/landingPage.module";
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    AppComponent
 
  ],
  imports: [
    BrowserModule,
    landingPageModule,
       RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
