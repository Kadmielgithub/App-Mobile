import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { tab3 } from './tab3.page';

const routes: Routes = [
  {
    path: '',
    component: tab3
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}
