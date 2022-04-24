import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SEARCH_CONFIG } from '../config/token-config';
import { SearchTokenInterface } from '../models/search-token.interface';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private _searchSubjec$ = new BehaviorSubject<string | null>(null);

  constructor(@Inject(SEARCH_CONFIG) private config: SearchTokenInterface) {}

  setNewSearch(search: string | null): void {
    this._searchSubjec$.next(search);
  }

  getSearch(): Observable<string | null> {
    return this._searchSubjec$.asObservable();
  }
}
