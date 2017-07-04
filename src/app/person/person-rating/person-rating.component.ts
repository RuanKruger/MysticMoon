import { Component, OnInit } from '@angular/core';
import { Person } from "app/models/person";
import { PersonRatingService } from "app/services/person-rating.service";

@Component({
  selector: 'app-person-rating',
  templateUrl: './person-rating.component.html',
  styleUrls: ['./person-rating.component.css']
})
export class PersonRatingComponent implements OnInit {
  

  person: Person = { name: "", age: 0, rating: 100 };
  images: any[];
  constructor(private personRatingService: PersonRatingService) { }

  ngOnInit() {
    this.person.name = "Jan";
    this.images = [];
    this.images.push({ source: 'assets/images/galleria/Chrysanthemum.jpg', title: 'Chrysanthemum' });
    this.images.push({ source: 'assets/images/galleria/Desert.jpg', alt: 'Description for Image 2', title: 'Title 2' });
    this.images.push({ source: 'assets/images/galleria/Hydrangeas.jpg', alt: 'Description for Image 3', title: 'Title 3' });
    this.images.push({ source: 'assets/images/galleria/Jellyfish.jpg', alt: 'Description for Image 4', title: 'Title 4' });
    this.images.push({ source: 'assets/images/galleria/Koala.jpg', alt: 'Description for Image 5', title: 'Title 5' });
    this.images.push({ source: 'assets/images/galleria/Lighthouse.jpg', alt: 'Description for Image 6', title: 'Title 6' });
    this.images.push({ source: 'assets/images/galleria/MysticMoon.jpg', alt: 'Description for Image 7', title: 'Title 7' });
    this.images.push({ source: 'assets/images/galleria/Penguins.jpg', alt: 'Description for Image 8', title: 'Title 8' });
    this.images.push({ source: 'assets/images/galleria/Tulips.jpg', alt: 'Description for Image 9', title: 'Title 9' });
  }
  ShowRating() {
    alert(this.personRatingService.getRating());
  }
}
