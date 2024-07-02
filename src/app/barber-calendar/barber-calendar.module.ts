import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarberCalendarPageRoutingModule } from './barber-calendar-routing.module';

import { BarberCalendarPage } from './barber-calendar.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarberCalendarPageRoutingModule,
    SharedModule
  ],
  declarations: [BarberCalendarPage]
})
export class BarberCalendarPageModule {}
