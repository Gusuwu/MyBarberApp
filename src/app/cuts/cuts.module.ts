import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CutsPageRoutingModule } from './cuts-routing.module';

import { CutsPage } from './cuts.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CutsPageRoutingModule,
    SharedModule
  ],
  declarations: [CutsPage]
})
export class CutsPageModule {}
