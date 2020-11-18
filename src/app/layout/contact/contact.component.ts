import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent{
  form = new FormGroup({
      name:new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required),
      shouldAddToNewsletter: new FormControl()
  })
}
  // onSubmit(){
  //   console.log(this.form)
  // }
  // form = new FormGroup({
  //   name: new FormControl('', Validators.required),
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   message: new FormControl('', Validators.required),
  //   shouldAddToNewsletter: new FormControl()
  // });

//   get name(){
//     return this.form.get('name');
//   }
//   get email(){
//     return this.form.get('email')
//   }
//   get message(){
//     return this.form.get('message')
//   }

//   log(x) {console.log(x);}
//   submit(f) {
//     console.log(f);
//   }
// }
