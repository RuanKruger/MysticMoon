import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonRatingService } from "app/services/person-rating.service";
import { GalleriaModule } from 'primeng/primeng';
import { FormsModule } from "@angular/forms";

import { routes, RouterRoutingModule } from "app/landingPage/router/router-routing.module";

import { AboutComponent } from './about/about.component';
import { GallaryComponent } from './gallary/gallary.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HelpComponent } from './help/help.component';
import { RouterModule } from "app/landingPage/router/router.module";

@NgModule({
  imports: [
    CommonModule,
    GalleriaModule,
    FormsModule,
    RouterRoutingModule,
    routes,
    RouterModule
  ],
  declarations: [
  AboutComponent,
  GallaryComponent,
  ContactUsComponent,
  HelpComponent],
  exports: [
  ],
  providers: [PersonRatingService]
})
export class landingPageModule { }
