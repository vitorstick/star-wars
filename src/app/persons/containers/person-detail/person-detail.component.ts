import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
