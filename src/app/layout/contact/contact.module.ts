import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';

import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { DisplayErrorComponentComponent } from './display-error-component/display-error-component.component';
import { TextfieldComponentComponent } from './textfield-component/textfield-component.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ContactRoutingModule,
    RecaptchaModule,
    RecaptchaFormsModule,
  ],
  declarations: [
    ContactComponent,
    DisplayErrorComponentComponent,
    TextfieldComponentComponent
  ],
  providers: []
})
export class ContactModule { }