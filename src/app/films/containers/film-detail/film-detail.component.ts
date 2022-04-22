import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FilmInterface } from 'src/app/models/films.interface';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmDetailComponent implements OnInit {
  filmDetail$!: Observable<FilmInterface>;
  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    this.filmDetail$ = this.route.data.pipe(map((data) => data.film));
  }

  back() {
    this.location.back();
  }
}
