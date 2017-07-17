import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  user = { name: '', subject: '', telephone: '', message: '' }
  endpoint: string;


  constructor(private http: Http) {
    this.http = http;
  }

  ngOnInit() {
    this.endpoint = "http://localhost:8000/sendEmail.php";
  }
  sendEmail() {
    let postVars = {
      email: this.user.subject,
      name: this.user.name,
      message: this.user.message
    };

    this.http.post(this.endpoint, postVars)
      .subscribe(
      response => console.log(response),
      response => console.log(response)
      )
  }
}