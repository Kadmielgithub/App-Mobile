import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'athletico-pr',
    loadChildren: () => import('./athletico-pr-tabs/athletico-pr-tabs.module').then( m => m.AthleticoPrTabsPageModule)
  },
  {
    path: 'athletico-pr-elenco',
    loadChildren: () => import('./athletico-pr-tabs/elenco/athletico-pr-elenco/athletico-pr-elenco.module').then( m => m.AthleticoPrElencoPageModule)
  },
  {
    path: 'athletico-pr-historia',
    loadChildren: () => import('./athletico-pr-tabs/historia/athletico-pr-historia/athletico-pr-historia.module').then( m => m.AthleticoPrHistoriaPageModule)
  },
  {
    path: 'athletico-pr-transferencias',
    loadChildren: () => import('./athletico-pr-tabs/transferencias/athletico-pr-transferencias/athletico-pr-transferencias.module').then( m => m.AthleticoPrTransferenciasPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
