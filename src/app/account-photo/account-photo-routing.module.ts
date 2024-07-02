import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountPhotoPage } from './account-photo.page';

const routes: Routes = [
  {
    path: '',
    component: AccountPhotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountPhotoPageRoutingModule {}
