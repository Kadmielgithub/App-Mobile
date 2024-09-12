import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AthleticoPrTabsPage } from './athletico-pr-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: AthleticoPrTabsPage,
    children: [
      {
        path: 'elenco',
        loadChildren: () => import('./elenco/athletico-pr-elenco/athletico-pr-elenco.module').then(m => m.AthleticoPrElencoPageModule)
      },
      {
        path: 'historia',
        loadChildren: () => import('./historia/athletico-pr-historia/athletico-pr-historia.module').then(m => m.AthleticoPrHistoriaPageModule)
      },
      {
        path: 'transferencias',
        loadChildren: () => import('./transferencias/athletico-pr-transferencias/athletico-pr-transferencias.module').then(m => m.AthleticoPrTransferenciasPageModule)
      },
      {
        path: '',
        redirectTo: '/athletico-pr/elenco',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AthleticoPrTabsPageRoutingModule {}

