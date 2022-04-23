import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { SEARCH_CONFIG } from '../config/token-config';
import { SearchTokenInterface } from '../models/search-token.interface';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private _searchSubjec$ = new Subject<string>();

  constructor(@Inject(SEARCH_CONFIG) private config: SearchTokenInterface) {}

  setNewSearch(search: string): void {
    this._searchSubjec$.next(search);
  }

  getSearch(): Observable<string | null> {
    return this._searchSubjec$.asObservable();
  }
}
