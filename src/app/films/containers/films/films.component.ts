import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FilmInterface } from 'src/app/models/films.interface';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss'],
})
export class FilmsComponent implements OnInit {
  films$!: Observable<FilmInterface[]>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.films$ = this.route.data.pipe(map((data) => data.films.results));

    this.films$.subscribe((films) => {
      console.log(films);
    });
  }
}
