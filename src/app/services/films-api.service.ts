import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FilmInterface } from '../models/films.interface';
import { MultiResult } from '../models/multi-result.interface';
import { PeopleInterface } from '../models/people.interface';
import { PlanetInterface } from '../models/planel.interface';
import { StarShipInterface } from '../models/starship.interface';

@Injectable({
  providedIn: 'root',
})
export class FilmsApiService {
  constructor(private httpClient: HttpClient) {}

  getFilms(
    search: string | null = null
  ): Observable<MultiResult<FilmInterface>> {
    const url: string = 'https://swapi.dev/api/films';
    let queryParams = new HttpParams();
    if (search) {
      queryParams = queryParams.set('search', search);
    }

    return this.httpClient.get<MultiResult<FilmInterface>>(url, {
      params: queryParams,
    });
  }

  getFilm(id: string): Observable<FilmInterface> {
    return this.httpClient.get<FilmInterface>(
      `https://swapi.dev/api/films/${id}`
    );
  }

  getPlanets() {
    return this.httpClient.get('https://swapi.dev/api/planets');
  }

  getPlanet(url: string): Observable<PlanetInterface> {
    return this.httpClient.get<PlanetInterface>(`${url}`);
  }
  getStarShip(url: string): Observable<StarShipInterface> {
    return this.httpClient.get<StarShipInterface>(`${url}`);
  }

  getPeople(params?: HttpParams): Observable<MultiResult<PeopleInterface>> {
    return this.httpClient.get<MultiResult<PeopleInterface>>(
      'https://swapi.dev/api/people',
      { params }
    );
  }

  getPerson(id: string): Observable<PeopleInterface> {
    return this.httpClient.get<PeopleInterface>(
      `https://swapi.dev/api/people/${id}`
    );
  }
}
