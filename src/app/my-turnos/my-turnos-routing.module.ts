import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyTurnosPage } from './my-turnos.page';

const routes: Routes = [
  {
    path: '',
    component: MyTurnosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyTurnosPageRoutingModule {}
