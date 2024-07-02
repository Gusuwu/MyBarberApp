import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PricesPageRoutingModule } from './prices-routing.module';

import { PricesPage } from './prices.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PricesPageRoutingModule,
    SharedModule
  ],
  declarations: [PricesPage]
})
export class PricesPageModule {}
