import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { PeopleInterface } from 'src/app/models/people.interface';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonComponent {
  @Input() person!: PeopleInterface;

  get personId(): string {
    return this.getPersonId(this.person?.url);
  }

  get personLink(): string {
    return `${this.personId}`;
  }

  private getPersonId(url: string): string {
    return url.split('/')[url.split('/').length - 2];
  }
}
