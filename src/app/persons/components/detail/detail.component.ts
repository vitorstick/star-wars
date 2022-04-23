import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { PeopleInterface } from 'src/app/models/people.interface';
import { StarShipInterface } from 'src/app/models/starship.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailComponent {
  @Input() detail!: PeopleInterface | null;
  @Input() starShips!: StarShipInterface[] | null;
}
