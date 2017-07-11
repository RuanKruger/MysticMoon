//Import components and modules here...

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { landingPageModule } from "app/landingPage/landingPage.module";
import { AppComponent } from './app.component';
import { RouterRoutingModule } from "app/routing.module";

@NgModule({
  declarations: [
    AppComponent
 
  ],
  imports: [
    BrowserModule,
    landingPageModule,
    RouterRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
