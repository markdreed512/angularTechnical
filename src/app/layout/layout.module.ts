import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';

import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { ContactComponent } from './contact/contact.component';
// import { FormComponent } from './form/form.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutRoutingModule,
    RecaptchaModule,
    RecaptchaFormsModule,
  ],
  declarations: [
    LayoutComponent,
    // ContactComponent
    // FormComponent
  ],
  providers: []
})
export class LayoutModule { }
