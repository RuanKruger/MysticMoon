import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonRatingComponent } from './person-rating/person-rating.component';
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
    PersonRatingComponent
  ],
  exports: [
    PersonRatingComponent
  ],
  providers: [PersonRatingService]
})
export class PersonModule { }
