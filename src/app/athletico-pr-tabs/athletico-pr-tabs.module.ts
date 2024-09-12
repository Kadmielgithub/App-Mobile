import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AthleticoPrTabsPageRoutingModule } from './athletico-pr-tabs-routing.module';
import { AthleticoPrTabsPage } from './athletico-pr-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AthleticoPrTabsPageRoutingModule
  ],
  declarations: [AthleticoPrTabsPage]
})
export class AthleticoPrTabsPageModule {}

