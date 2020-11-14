import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder){ }

  ngOnInit(){
    this.initializeForm();
  }

  initializeForm(): void {
    this.contactForm = this.fb.group({
      name: "name",
      email: "email",
      message: "message",
      shouldAddToNewsletter: false
    })
  }

  onSubmit(): void {
    console.log(this.contactForm)
  }
}


