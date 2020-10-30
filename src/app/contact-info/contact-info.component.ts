import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {
  email:string;
  number:string;
  location:string;
  constructor() { }

  ngOnInit(): void {
    this.email = "kvaksebastian@gmail.com";
    this.number = "+380505507922";
    this.location = "Ivano-Frankivsk, Ukraine";
  }

}
