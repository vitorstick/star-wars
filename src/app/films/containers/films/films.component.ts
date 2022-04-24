import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { FilmInterface } from 'src/app/models/films.interface';
import { FilmsApiService } from 'src/app/services/films-api.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss'],
})
export class FilmsComponent implements OnInit {
  films$!: Observable<FilmInterface[]>;
  filmsAfterSearch$!: Observable<FilmInterface[]>;

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService,
    private FilmsApiService: FilmsApiService
  ) {}

  ngOnInit(): void {
    this.films$ = this.route.data.pipe(map((data) => data.films.results));

    this.filmsAfterSearch$ = this.searchService.getSearch().pipe(
      filter((search) => !!search),
      switchMap((search) =>
        this.FilmsApiService.getFilms(search).pipe(map((data) => data.results))
      )
    );
  }
}
