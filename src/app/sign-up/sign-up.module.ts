import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpPageRoutingModule } from './sign-up-routing.module';

import { SignUpPage } from './sign-up.page';
import { WizardSignUpComponent } from '../wizard-sign-up/wizard-sign-up.component';
import { WizardSignUpStepAccountComponent } from '../wizard-sign-up-step-account/wizard-sign-up-step-account.component';
import { WizardSignUpStepPlaceComponent } from '../wizard-sign-up-step-place/wizard-sign-up-step-place.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpPageRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [SignUpPage, WizardSignUpComponent, WizardSignUpStepAccountComponent, WizardSignUpStepPlaceComponent]
})
export class SignUpPageModule {}
