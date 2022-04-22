import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PeopleInterface } from 'src/app/models/people.interface';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonsListComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  people$!: Observable<PeopleInterface[]>;

  ngOnInit(): void {
    this.people$ = this.route.data.pipe(map((data) => data.people.results));
  }
}
