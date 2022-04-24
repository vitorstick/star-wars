import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SEARCH_CONFIG } from 'src/app/config/token-config';
import { SearchTokenInterface } from 'src/app/models/search-token.interface';
import { SearchService } from 'src/app/services/search.service';
import { filter, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopnavComponent implements OnInit {
  searchForm!: FormGroup;
  searchItems$ = new BehaviorSubject<string[]>([]);

  private _searchItems: string[] = [];

  constructor(
    @Inject(SEARCH_CONFIG) private config: SearchTokenInterface,
    private searchService: SearchService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createSearchForm();

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        tap(() => {
          this.searchForm.controls.search?.reset();
          this._searchItems = [];
          this.searchItems$.next(this._searchItems);
          this.searchService.setNewSearch(null);
        })
      )
      .subscribe();
  }

  search(): void {
    if (this.searchForm.valid) {
      this.searchService.setNewSearch(this.searchForm.controls.search?.value);
      this.setSearchItems(this.searchForm.controls.search?.value);
    }
    this.searchForm.controls.search?.reset();
  }

  setSearch(i: number) {
    this.searchService.setNewSearch(this._searchItems[i]);
  }

  private setSearchItems(search: string): void {
    if (this._searchItems.length >= this.config.search) {
      this._searchItems.shift();
    }
    this._searchItems.push(search);
    this.searchItems$.next(this._searchItems);
  }

  private createSearchForm(): void {
    this.searchForm = new FormGroup({
      search: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }
}
