import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AthleticoPrHistoriaPageRoutingModule } from './athletico-pr-historia-routing.module';

import { AthleticoPrHistoriaPage } from './athletico-pr-historia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AthleticoPrHistoriaPageRoutingModule
  ],
  declarations: [AthleticoPrHistoriaPage]
})
export class AthleticoPrHistoriaPageModule {}
