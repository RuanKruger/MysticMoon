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
  ImageSrc: "images/products/1.png"
}, {
  ID: 3,
  Name: "SuperPlasma 50",
  Price: 2400,
  Category: "Televisions",
  ImageSrc: "images/products/3.png"
}, {
  ID: 4,
  Name: "SuperLED 50",
  Price: 1600,
  Category: "Televisions",
  ImageSrc: "images/products/4.png"
}, {
  ID: 5,
  Name: "SuperLED 42",
  Price: 1450,
  Category: "Televisions",
  ImageSrc: "images/products/5.png"
}, {
  ID: 6,
  Name: "SuperLCD 55",
  Price: 1350,
  Category: "Televisions",
  ImageSrc: "images/products/6.png"
}, {
  ID: 7,
  Name: "SuperLCD 42",
  Price: 1200,
  Category: "Televisions",
  ImageSrc: "images/products/7.png"
}, {
  ID: 8,
  Name: "SuperPlasma 65",
  Price: 3500,
  Category: "Televisions",
  ImageSrc: "images/products/8.png"
}, {
  ID: 9,
  Name: "SuperLCD 70",
  Price: 4000,
  Category: "Televisions",
  ImageSrc: "images/products/9.png"
}, {
  ID: 10,
  Name: "DesktopLED 21",
  Price: 175,
  Category: "Monitors",
  ImageSrc: "images/products/10.png"
}, {
  ID: 12,
  Name: "DesktopLCD 21",
  Price: 170,
  Category: "Monitors",
  ImageSrc: "images/products/12.png"
}, {
  ID: 13,
  Name: "DesktopLCD 19",
  Price: 160,
  Category: "Monitors",
  ImageSrc: "images/products/13.png"
}, {
  ID: 14,
  Name: "Projector Plus",
  Price: 550,
  Category: "Projectors",
  ImageSrc: "images/products/14.png"
}, {
  ID: 15,
  Name: "Projector PlusHD",
  Price: 750,
  Category: "Projectors",
  ImageSrc: "images/products/15.png"
}, {
  ID: 17,
  Name: "ExcelRemote IR",
  Price: 150,
  Category: "Automation",
  ImageSrc: "images/products/17.png"
}, {
  ID: 18,
  Name: "ExcelRemote BT",
  Price: 180,
  Category: "Automation",
  ImageSrc: "images/products/18.png"
}, {
  ID: 19,
  Name: "ExcelRemote IP",
  Price: 200,
  Category: "Automation",
  ImageSrc: "images/products/19.png"
}];

@Injectable()
export class ItemsService {
  getProducts(): Product[] {
    return products;
  }
}
