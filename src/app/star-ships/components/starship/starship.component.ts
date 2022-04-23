import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { StarShipInterface } from 'src/app/models/starship.interface';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarshipComponent {
  @Input() starShip!: StarShipInterface | null;
}
