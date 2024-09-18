import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { Tab3PageRoutingModule } from './tab3-routing.module'; // Importação correta
import { tab3 } from './tab3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab3PageRoutingModule // Deve estar aqui
  ],
  declarations: [tab3] // O Tab3Page é a única declaração
})
export class Tab3PageModule {}
