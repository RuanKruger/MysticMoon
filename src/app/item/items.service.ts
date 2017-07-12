import { Injectable } from '@angular/core';

export class Product {
  ID: number;
  Name: string;
  Price: number;
  Category: string;
  ImageSrc: string;
}

let products: Product[] = [{
  ID: 1,
  Name: "HD Video Player",
  Price: 330,
  Category: "Video Players",
  ImageSrc: "http://lorempixel.com/140/140/"
}, {
  ID: 3,
  Name: "SuperPlasma 50",
  Price: 2400,
  Category: "Televisions",
  ImageSrc: "http://lorempixel.com/140/148/"
}, {
  ID: 4,
  Name: "SuperLED 50",
  Price: 1600,
  Category: "Televisions",
  ImageSrc: "http://lorempixel.com/140/147/"
}, {
  ID: 5,
  Name: "SuperLED 42",
  Price: 1450,
  Category: "Televisions",
  ImageSrc: "http://lorempixel.com/140/146/"
}, {
  ID: 6,
  Name: "SuperLCD 55",
  Price: 1350,
  Category: "Televisions",
  ImageSrc: "http://lorempixel.com/140/145/"
}, {
  ID: 7,
  Name: "SuperLCD 42",
  Price: 1200,
  Category: "Televisions",
  ImageSrc: "http://lorempixel.com/140/144/"
}, {
  ID: 8,
  Name: "SuperPlasma 65",
  Price: 3500,
  Category: "Televisions",
  ImageSrc: "http://lorempixel.com/140/143/"
}, {
  ID: 9,
  Name: "SuperLCD 70",
  Price: 4000,
  Category: "Televisions",
  ImageSrc: "http://lorempixel.com/140/142/"
}, {
  ID: 10,
  Name: "DesktopLED 21",
  Price: 175,
  Category: "Monitors",
  ImageSrc: "http://lorempixel.com/140/141/"
}, {
  ID: 12,
  Name: "DesktopLCD 21",
  Price: 170,
  Category: "Monitors",
  ImageSrc: "http://lorempixel.com/140/149/"
}, {
  ID: 13,
  Name: "DesktopLCD 19",
  Price: 160,
  Category: "Monitors",
  ImageSrc: "http://lorempixel.com/140/150/"
}, {
  ID: 14,
  Name: "Projector Plus",
  Price: 550,
  Category: "Projectors",
  ImageSrc: "http://lorempixel.com/140/140/"
}, {
  ID: 15,
  Name: "Projector PlusHD",
  Price: 750,
  Category: "Projectors",
  ImageSrc: "http://lorempixel.com/140/142/"
}, {
  ID: 17,
  Name: "ExcelRemote IR",
  Price: 150,
  Category: "Automation",
  ImageSrc: "http://lorempixel.com/140/149/"
}, {
  ID: 18,
  Name: "ExcelRemote BT",
  Price: 180,
  Category: "Automation",
  ImageSrc: "http://lorempixel.com/140/147/"
}, {
  ID: 19,
  Name: "ExcelRemote IP",
  Price: 200,
  Category: "Automation",
  ImageSrc: "http://lorempixel.com/140/145/"
}];

@Injectable()
export class ItemsService {
  getProducts(): Product[] {
    return products;
  }
}
