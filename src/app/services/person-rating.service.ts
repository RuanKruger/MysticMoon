import { Injectable } from '@angular/core';
import { Person } from "app/models/person";

@Injectable()
export class PersonRatingService {

  constructor() { }

  person: Person;

  getRating():number{
    console.log("Hello")
    return 10;
  }
}
