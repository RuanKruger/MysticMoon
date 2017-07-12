import { Component, OnInit } from '@angular/core';
import { Product, ItemsService } from "app/item/items.service";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  providers: [ItemsService],
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  products: Product[];

  constructor(service: ItemsService) {
    this.products = service.getProducts();
  }

  ngOnInit() {
    this.products
  }

}
