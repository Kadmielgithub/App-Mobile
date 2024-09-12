import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AthleticoPrElencoPageRoutingModule } from './athletico-pr-elenco-routing.module';

import { AthleticoPrElencoPage } from './athletico-pr-elenco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AthleticoPrElencoPageRoutingModule
  ],
  declarations: [AthleticoPrElencoPage]
})
export class AthleticoPrElencoPageModule {}
