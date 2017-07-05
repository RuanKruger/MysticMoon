import { NgModule, ModuleWithProviders } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from "app/landingPage/about/about.component";
import { ContactUsComponent } from "app/landingPage/contact-us/contact-us.component";
import { GallaryComponent } from "app/landingPage/gallary/gallary.component";
import { HelpComponent } from "app/landingPage/help/help.component";
import { CommonModule } from "@angular/common";


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: []
})

export class RouterRoutingModule { }

export const router: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full'},
  { path: 'about', component: AboutComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: 'gallary', component: GallaryComponent },
  { path: 'help', component: HelpComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);


