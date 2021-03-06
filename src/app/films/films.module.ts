import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsRoutingModule } from './films-routing.module';
import { FilmComponent } from './components/film/film.component';
import { FilmsComponent } from './containers/films/films.component';
import { FilmDetailComponent } from './containers/film-detail/film-detail.component';
import { FilmDetailResolver } from './services/film-detail.resolver';
import { StarShipsModule } from '../star-ships/star-ships.module';

@NgModule({
  declarations: [FilmsComponent, FilmComponent, FilmDetailComponent],
  imports: [CommonModule, FilmsRoutingModule, StarShipsModule],
  providers: [FilmDetailResolver],
})
export class FilmsModule {}
