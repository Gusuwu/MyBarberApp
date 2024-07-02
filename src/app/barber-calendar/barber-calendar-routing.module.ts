import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarberCalendarPage } from './barber-calendar.page';

const routes: Routes = [
  {
    path: '',
    component: BarberCalendarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarberCalendarPageRoutingModule {}
