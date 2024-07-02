import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyTurnosPageRoutingModule } from './my-turnos-routing.module';

import { MyTurnosPage } from './my-turnos.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyTurnosPageRoutingModule,
    SharedModule
  ],
  declarations: [MyTurnosPage]
})
export class MyTurnosPageModule {}
