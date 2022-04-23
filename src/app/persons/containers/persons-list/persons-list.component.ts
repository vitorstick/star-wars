import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
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
    private route: ActivatedRoute,
    private searchService: SearchService,
    private FilmsApiService: FilmsApiService
  ) {}

  people$!: Observable<PeopleInterface[]>;
  peopleAfterSearch$!: Observable<PeopleInterface[]>;

  ngOnInit(): void {
    this.people$ = this.route.data.pipe(map((data) => data.people.results));

    this.peopleAfterSearch$ = this.searchService
      .getSearch()
      .pipe(
        switchMap((search) =>
          this.FilmsApiService.getPeople(search).pipe(
            map((data) => data.results)
          )
        )
      );
  }
}
