import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { PeopleInterface } from 'src/app/models/people.interface';
import { FilmsApiService } from 'src/app/services/films-api.service';

@Injectable()
export class PeopleResolver implements Resolve<PeopleInterface> {
  constructor(private filmsApiService: FilmsApiService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<PeopleInterface> {
    const id = route.paramMap.get('personId') ?? '';
    return this.filmsApiService.getPerson(id);
  }
}
