import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';
import { Pagination } from 'src/app/models/pagination.interface';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
  @Input() pagination!: Pagination | null;

  @Output() readonly navigate: EventEmitter<string> = new EventEmitter();

  get hasNextPage(): boolean {
    return !!this.pagination?.next;
  }

  get hasPreviousPage(): boolean {
    return !!this.pagination?.previous;
  }

  previousPage(): void {
    if (this.pagination?.previous) {
      this.navigate.emit(this.pagination?.previous);
    }
  }

  nextPage(): void {
    if (this.pagination?.next) {
      this.navigate.emit(this.pagination?.next);
    }
  }
}
