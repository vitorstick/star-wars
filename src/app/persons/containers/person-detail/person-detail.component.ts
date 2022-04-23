import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { combineLatest, forkJoin, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { PeopleInterface } from 'src/app/models/people.interface';
import { FilmsApiService } from 'src/app/services/films-api.service';
import { PlanetInterface } from 'src/app/models/planel.interface';
import { StarShipInterface } from 'src/app/models/starship.interface';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonDetailComponent implements OnInit {
  personDetail$!: Observable<PeopleInterface>;
  starShips$!: Observable<StarShipInterface[]>;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private filmsApiService: FilmsApiService
  ) {}

  ngOnInit(): void {
    this.personDetail$ = this.route.data.pipe(
      switchMap((data) => {
        const person = data.person;
        return this.getPlanelInfo(person.homeworld).pipe(
          map((planet) => {
            return {
              ...person,
              homeworld: planet.name,
            };
          })
        );
      })
    );

    this.starShips$ = this.route.data.pipe(
      switchMap((data) => {
        const person = data.person;
        const starShipObservablesArray: Observable<StarShipInterface>[] = [];
        person.starships.forEach((starship: string) => {
          starShipObservablesArray.push(this.getStarshipInfo(starship));
        });
        return forkJoin(starShipObservablesArray);
      })
    );
  }

  back() {
    this.location.back();
  }

  private getPlanelInfo(url: string): Observable<PlanetInterface> {
    return this.filmsApiService.getPlanet(url);
  }

  private getStarshipInfo(url: string): Observable<StarShipInterface> {
    return this.filmsApiService.getStarShip(url);
  }
}
