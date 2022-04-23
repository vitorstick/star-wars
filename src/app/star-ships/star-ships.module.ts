import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipComponent } from './components/starship/starship.component';
import { StarshipLengthPipe } from './pipes/starship-length.pipe';

@NgModule({
  declarations: [StarshipComponent, StarshipLengthPipe],
  exports: [StarshipComponent],
  imports: [CommonModule],
})
export class StarShipsModule {}
