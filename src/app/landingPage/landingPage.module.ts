import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonRatingService } from "app/services/person-rating.service";
import { GalleriaModule } from 'primeng/primeng';
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    GalleriaModule,
    FormsModule
  ],
  declarations: [
  ],
  exports: [
  ],
  providers: [PersonRatingService]
})
export class landingPageModule { }
