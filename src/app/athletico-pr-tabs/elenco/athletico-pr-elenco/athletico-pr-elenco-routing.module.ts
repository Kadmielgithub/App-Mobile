import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AthleticoPrElencoPage } from './athletico-pr-elenco.page';

const routes: Routes = [
  {
    path: '',
    component: AthleticoPrElencoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AthleticoPrElencoPageRoutingModule {}
