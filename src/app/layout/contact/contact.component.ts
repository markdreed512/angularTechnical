import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm(): void {
    this.contactForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      message: [null, Validators.required],
      shouldAddToNewsletter: [null]
    })
  }

  onSubmit(): void {
    console.log(this.contactForm)
    console.log(this.contactForm.valid)
    if(this.contactForm.valid){
      console.log("form submitted")
    }
    else{
      console.log("in onSubmit else")
      this.validateAllFormFields(this.contactForm);
    }
  }

  validateAllFormFields(form) {
    Object.keys(form.controls).forEach(field => {
      const control = form.get(field);            
      control.markAsTouched({ onlySelf: true });      
    });
  }

  isFieldValid(field: string) {
    return !this.contactForm.get(field).valid  && this.contactForm.get(field).touched;
  }
  
  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    }
  }
}
