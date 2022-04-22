import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FilmInterface } from '../models/films.interface';
import { MultiResult } from '../models/multi-result.interface';

@Injectable({
  providedIn: 'root',
})
export class FilmsApiService {
  constructor(private httpClient: HttpClient) {}

  getFilms(): Observable<MultiResult<FilmInterface>> {
    return this.httpClient.get<MultiResult<FilmInterface>>(
      'https://swapi.dev/api/films'
    );
  }

  getFilm(id: string): Observable<FilmInterface> {
    return this.httpClient.get<FilmInterface>(
      `https://swapi.dev/api/films/${id}`
    );
  }

  getPlanets() {
    return this.httpClient.get('https://swapi.dev/api/planets');
  }

  getPlanet(id: number) {
    return this.httpClient.get(`https://swapi.dev/api/planets/${id}`);
  }

  getPeople() {
    return this.httpClient.get('https://swapi.dev/api/people');
  }

  getPerson(id: number) {
    return this.httpClient.get(`https://swapi.dev/api/people/${id}`);
  }
}
