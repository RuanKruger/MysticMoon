import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleriaModule } from 'primeng/primeng';
import { FormsModule } from "@angular/forms";


import { AboutComponent } from './about/about.component';
import { GallaryComponent } from './gallary/gallary.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';

@NgModule({
  imports: [
    CommonModule,
    GalleriaModule,
    FormsModule
  ],
  declarations: [
  AboutComponent,
  GallaryComponent,
  ContactUsComponent,
  HomeComponent,
  ItemsComponent],
  exports: [
  ],
  providers: []
})
export class landingPageModule { }
