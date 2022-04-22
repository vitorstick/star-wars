import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { MultiResult } from '../models/multi-result.interface';
import { PeopleInterface } from '../models/people.interface';
import { FilmsApiService } from './films-api.service';

@Injectable({
  providedIn: 'root',
})
export class PersonsResolver implements Resolve<MultiResult<PeopleInterface>> {
  constructor(private filmsApiService: FilmsApiService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<MultiResult<PeopleInterface>> {
    return this.filmsApiService.getPeople();
  }
}
