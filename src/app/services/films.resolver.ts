import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { FilmInterface } from '../models/films.interface';
import { MultiResult } from '../models/multi-result.interface';
import { FilmsApiService } from './films-api.service';

@Injectable({
  providedIn: 'root',
})
export class FilmsResolver implements Resolve<MultiResult<FilmInterface>> {
  constructor(private filmsApiService: FilmsApiService) {}

  resolve(): Observable<MultiResult<FilmInterface>> {
    return this.filmsApiService.getFilms();
  }
}
