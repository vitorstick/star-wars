import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmDetailComponent } from './containers/film-detail/film-detail.component';
import { FilmsComponent } from './containers/films/films.component';
import { FilmDetailResolver } from './services/film-detail.resolver';

const routes: Routes = [
  {
    path: '',
    component: FilmsComponent,
  },
  {
    path: ':filmeId',
    component: FilmDetailComponent,
    resolve: {
      film: FilmDetailResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmsRoutingModule {}
