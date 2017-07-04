//Import components and modules here...

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { landingPageModule } from "app/landingPage/landingPage.module";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    landingPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
