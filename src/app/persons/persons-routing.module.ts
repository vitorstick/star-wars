import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonDetailComponent } from './containers/person-detail/person-detail.component';
import { PersonsListComponent } from './containers/persons-list/persons-list.component';
import { PeopleResolver } from './services/people.resolver';

const routes: Routes = [
  {
    path: '',
    component: PersonsListComponent,
  },
  {
    path: ':personId',
    component: PersonDetailComponent,
    resolve: {
      person: PeopleResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonsRoutingModule {}
