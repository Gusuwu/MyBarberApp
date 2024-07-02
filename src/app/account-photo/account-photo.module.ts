import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountPhotoPageRoutingModule } from './account-photo-routing.module';

import { AccountPhotoPage } from './account-photo.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountPhotoPageRoutingModule,
    SharedModule
  ],
  declarations: [AccountPhotoPage]
})
export class AccountPhotoPageModule {}
