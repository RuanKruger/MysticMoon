import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryImageSize } from 'ngx-gallery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  ngOnInit(): void {
    this.galleryOptions = [
      {
        width: '90%',
        height: '700px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Fade,
        imageSwipe: true,
        imageSize: NgxGalleryImageSize.Cover
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: true
      }
      
    ];

    this.galleryImages = [
      {
        small: 'assets/images/galleria/Chrysanthemum.jpg',
        medium: 'assets/images/galleria/Chrysanthemum.jpg',
        big: 'assets/images/galleria/Chrysanthemum.jpg'
      },
      {
        small: 'assets/images/galleria/Desert.jpg',
        medium: 'assets/images/galleria/Desert.jpg',
        big: 'assets/images/galleria/Desert.jpg'
      },
      {
        small: 'assets/images/galleria/Hydrangeas.jpg',
        medium: 'assets/images/galleria/Hydrangeas.jpg',
        big: 'assets/images/galleria/Hydrangeas.jpg'
      },
      {
        small: 'assets/images/galleria/Jellyfish.jpg',
        medium: 'assets/images/galleria/Jellyfish.jpg',
        big: 'assets/images/galleria/Jellyfish.jpg'
      },
      {
        small: 'assets/images/galleria/Koala.jpg',
        medium: 'assets/images/galleria/Koala.jpg',
        big: 'assets/images/galleria/Koala.jpg'
      },
      {
        small: 'assets/images/galleria/Lighthouse.jpg',
        medium: 'assets/images/galleria/Lighthouse.jpg',
        big: 'assets/images/galleria/Lighthouse.jpg'
      },
      {
        small: 'assets/images/galleria/Penguins.jpg',
        medium: 'assets/images/galleria/Penguins.jpg',
        big: 'assets/images/galleria/Penguins.jpg'
      },
      {
        small: 'assets/images/galleria/Tulips.jpg',
        medium: 'assets/images/galleria/Tulips.jpg',
        big: 'assets/images/galleria/Tulips.jpg'
      },
      {
        small: 'assets/images/galleria/Penguins.jpg',
        medium: 'assets/images/galleria/Penguins.jpg',
        big: 'assets/images/galleria/Penguins.jpg'
      }
    ];
  }
}
