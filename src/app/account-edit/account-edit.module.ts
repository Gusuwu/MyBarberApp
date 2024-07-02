import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountEditPageRoutingModule } from './account-edit-routing.module';

import { AccountEditPage } from './account-edit.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountEditPageRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [AccountEditPage]
})
export class AccountEditPageModule {}
