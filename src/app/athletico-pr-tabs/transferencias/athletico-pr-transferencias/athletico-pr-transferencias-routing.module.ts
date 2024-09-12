import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AthleticoPrTransferenciasPage } from './athletico-pr-transferencias.page';

const routes: Routes = [
  {
    path: '',
    component: AthleticoPrTransferenciasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AthleticoPrTransferenciasPageRoutingModule {}
