import { HttpParams } from '@angular/common/http';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  BehaviorSubject,
  combineLatest,
  forkJoin,
  merge,
  Observable,
  race,
} from 'rxjs';
import { filter, map, shareReplay, startWith, switchMap } from 'rxjs/operators';
import { MultiResult } from 'src/app/models/multi-result.interface';
import { Pagination } from 'src/app/models/pagination.interface';
import { PeopleInterface } from 'src/app/models/people.interface';
import { FilmsApiService } from 'src/app/services/films-api.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonsListComponent implements OnInit {
  constructor(
    private searchService: SearchService,
    private filmsApiService: FilmsApiService
  ) {}

  people$!: Observable<PeopleInterface[]>;
  pagination$!: Observable<Pagination>;

  private _navigationSubject$ = new BehaviorSubject<string | null>(null);

  ngOnInit(): void {
    this.people$ = this.getPeopleList().pipe(map((data) => data.results));

    this.pagination$ = this.getPeopleList().pipe(
      map((data) => {
        return {
          next: data.next,
          previous: data.previous,
        };
      })
    );
  }

  navigate(url: string): void {
    this._navigationSubject$.next(this.getPageId(url));
  }

  private getPeopleList(): Observable<MultiResult<PeopleInterface>> {
    return combineLatest([
      this.searchService.getSearch(),
      this._navigationSubject$,
    ]).pipe(
      switchMap(([search, nav]) => {
        let queryParams = new HttpParams();
        if (search) {
          queryParams = queryParams.set('search', search);
        }
        if (nav) {
          queryParams = queryParams.set('page', nav);
        }
        return this.filmsApiService.getPeople(queryParams);
      })
    );
  }

  private getPageId(url: string): string {
    return url.split('=')[url.split('=').length - 1];
  }
}
