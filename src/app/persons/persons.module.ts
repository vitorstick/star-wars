import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonsRoutingModule } from './persons-routing.module';
import { PersonsListComponent } from './containers/persons-list/persons-list.component';
import { PersonDetailComponent } from './containers/person-detail/person-detail.component';
import { PersonComponent } from './components/person/person.component';
import { PeopleResolver } from './services/people.resolver';
import { PersonHeightPipe } from './pipes/person-height.pipe';
import { DetailComponent } from './components/detail/detail.component';
import { StarShipsModule } from '../star-ships/star-ships.module';
import { UiModule } from '../ui/ui.module';

@NgModule({
  declarations: [
    PersonsListComponent,
    PersonDetailComponent,
    PersonComponent,
    PersonHeightPipe,
    DetailComponent,
  ],
  imports: [CommonModule, PersonsRoutingModule, StarShipsModule, UiModule],
  providers: [PeopleResolver],
})
export class PersonsModule {}
