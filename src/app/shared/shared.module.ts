import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBarberComponent } from './header-barber/header-barber.component';
import { CheckboxListComponent } from './checkbox-list/checkbox-list.component';
import { PrecioCardComponent } from './precio-card/precio-card.component';
import { BarberCardComponent } from './barber-card/barber-card.component';
import { CorteCardComponent } from './corte-card/corte-card.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';
import { ModalWarningComponent } from './modal-warning/modal-warning.component';
import { TurnoListComponent } from './turno-list/turno-list.component';
import { TurnoCardComponent } from './turno-card/turno-card.component';

@NgModule({
  declarations: [
    HeaderBarberComponent,
    CheckboxListComponent,
    PrecioCardComponent,
    BarberCardComponent,
    CorteCardComponent,
    ModalComponent,
    ModalConfirmComponent,
    ModalWarningComponent,
    TurnoListComponent,
    TurnoCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderBarberComponent,
    CheckboxListComponent,
    PrecioCardComponent,
    BarberCardComponent,
    CorteCardComponent,
    ModalComponent,
    ModalConfirmComponent,
    ModalWarningComponent,
    TurnoListComponent,
    TurnoCardComponent
  ]
})
export class SharedModule { }