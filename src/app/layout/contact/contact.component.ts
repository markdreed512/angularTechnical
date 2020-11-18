import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent{
  success: boolean = false;
  form = new FormGroup({
      name:new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required),
      shouldAddToNewsletter: new FormControl()
  })

  onSubmit(){
    this.success = true;
    this.form.reset()
  }
}
  // onsubmit(){
  //   console.log(this.form)
  // }
  // form = new FormGroup({
  //   name: new FormControl('', Validators.required),
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   message: new FormControl('', Validators.required),
  //   shouldAddToNewsletter: new FormControl()
  // });


//   log(x) {console.log(x);}
//   submit(f) {
//     console.log(f);
//   }
// }
