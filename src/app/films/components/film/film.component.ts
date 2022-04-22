import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FilmInterface } from 'src/app/models/films.interface';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmComponent {
  @Input() film!: FilmInterface;

  get filmId(): number {
    return this.film?.episode_id ?? 0;
  }

  get filmLink(): string {
    return `${this.filmId}`;
  }

  navigate() {}
}
