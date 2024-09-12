import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AthleticoPrTransferenciasPageRoutingModule } from './athletico-pr-transferencias-routing.module';

import { AthleticoPrTransferenciasPage } from './athletico-pr-transferencias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AthleticoPrTransferenciasPageRoutingModule
  ],
  declarations: [AthleticoPrTransferenciasPage]
})
export class AthleticoPrTransferenciasPageModule {}
