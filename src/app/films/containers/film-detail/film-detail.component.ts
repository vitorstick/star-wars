import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { forkJoin, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { FilmInterface } from 'src/app/models/films.interface';
import { FilmsApiService } from 'src/app/services/films-api.service';
import { StarShipInterface } from 'src/app/models/starship.interface';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmDetailComponent implements OnInit {
  filmDetail$!: Observable<FilmInterface>;
  starShips$!: Observable<StarShipInterface[]>;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private filmsApiService: FilmsApiService
  ) {}

  ngOnInit(): void {
    this.filmDetail$ = this.route.data.pipe(map((data) => data.film));

    this.starShips$ = this.route.data.pipe(
      switchMap((data) => {
        const film: FilmInterface = data.film;
        const starShipObservablesArray: Observable<StarShipInterface>[] = [];
        film.starships.forEach((starship: string) => {
          starShipObservablesArray.push(this.getStarshipInfo(starship));
        });
        return forkJoin(starShipObservablesArray);
      })
    );
  }

  back() {
    this.location.back();
  }

  private getStarshipInfo(url: string): Observable<StarShipInterface> {
    return this.filmsApiService.getStarShip(url);
  }
}
