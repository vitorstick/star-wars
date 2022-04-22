import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonsRoutingModule } from './persons-routing.module';
import { PersonsListComponent } from './containers/persons-list/persons-list.component';
import { PersonDetailComponent } from './containers/person-detail/person-detail.component';
import { PersonComponent } from './components/person/person.component';


@NgModule({
  declarations: [
    PersonsListComponent,
    PersonDetailComponent,
    PersonComponent
  ],
  imports: [
    CommonModule,
    PersonsRoutingModule
  ]
})
export class PersonsModule { }
