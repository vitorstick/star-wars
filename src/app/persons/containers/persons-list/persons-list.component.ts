import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
