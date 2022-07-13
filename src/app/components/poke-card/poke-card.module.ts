import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PokeCardComponent } from './poke-card.component';

@NgModule({
  declarations: [PokeCardComponent],
  imports: [CommonModule, IonicModule],
  exports: [PokeCardComponent],
})
export class PokeCardModule {}
