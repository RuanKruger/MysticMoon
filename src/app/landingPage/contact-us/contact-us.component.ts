import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
   
  user = {name: '', email: '', telephone: '', message: ''}

  constructor() { }

  ngOnInit() {
  }

  test() {
    console.log(this.user.name);
    console.log(this.user.email);
    console.log(this.user.telephone);
    console.log(this.user.message);
  }
}