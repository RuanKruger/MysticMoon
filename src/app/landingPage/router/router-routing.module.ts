import { NgModule, ModuleWithProviders } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from "app/landingPage/about/about.component";
import { ContactUsComponent } from "app/landingPage/contact-us/contact-us.component";
import { GallaryComponent } from "app/landingPage/gallary/gallary.component";
import { HomeComponent } from "app/landingPage/home/home.component";
import { CommonModule } from "@angular/common";
import { ItemsComponent } from "app/landingPage/items/items.component";


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: []
})

export class RouterRoutingModule { }

export const router: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'about', component: AboutComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: 'gallary', component: GallaryComponent },
  { path: 'home', component: HomeComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);


