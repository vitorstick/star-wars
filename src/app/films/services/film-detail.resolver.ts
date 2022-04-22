import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { FilmInterface } from 'src/app/models/films.interface';
import { FilmsApiService } from 'src/app/services/films-api.service';

@Injectable()
export class FilmDetailResolver implements Resolve<FilmInterface> {
  constructor(private filmsApiService: FilmsApiService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<FilmInterface> {
    const id = route.paramMap.get('filmeId') ?? '';
    return this.filmsApiService.getFilm(id);
  }
}
