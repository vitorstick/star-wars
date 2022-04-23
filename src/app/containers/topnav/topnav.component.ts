import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SEARCH_CONFIG } from 'src/app/config/token-config';
import { SearchTokenInterface } from 'src/app/models/search-token.interface';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopnavComponent implements OnInit {
  searchForm!: FormGroup;

  searchItems: string[] = [];

  constructor(
    @Inject(SEARCH_CONFIG) private config: SearchTokenInterface,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.createSearchForm();
  }

  search(): void {
    if (this.searchForm.valid) {
      this.searchService.setNewSearch(this.searchForm.controls.search?.value);
      this.setSearchItems(this.searchForm.controls.search?.value);
    }
    this.searchForm.controls.search?.reset();
  }

  setSearch(i: number) {
    this.searchService.setNewSearch(this.searchItems[i]);
  }

  private setSearchItems(search: string): void {
    if (this.searchItems.length >= this.config.search) {
      this.searchItems.shift();
    }
    this.searchItems.push(search);
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
