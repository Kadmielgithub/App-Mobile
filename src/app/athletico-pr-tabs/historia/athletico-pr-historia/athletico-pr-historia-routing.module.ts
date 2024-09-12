import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AthleticoPrHistoriaPage } from './athletico-pr-historia.page';

const routes: Routes = [
  {
    path: '',
    component: AthleticoPrHistoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AthleticoPrHistoriaPageRoutingModule {}
