import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should emit value nextPage is called and pagination next is defined', () => {
    fixture.detectChanges();
    component.pagination = {
      next: 'next',
      previous: 'previous',
    };
    const navigate = spyOn(component.navigate, 'emit');

    component.nextPage();

    expect(navigate).toHaveBeenCalledWith('next');
  });

  it('should emit value previousPage is called and pagination previous is defined', () => {
    fixture.detectChanges();
    component.pagination = {
      next: 'next',
      previous: 'previous',
    };
    const navigate = spyOn(component.navigate, 'emit');

    component.previousPage();

    expect(navigate).toHaveBeenCalledWith('previous');
  });

  it('should not emit value nextPage is called and pagination next is undefined', () => {
    fixture.detectChanges();
    component.pagination = {
      next: null,
      previous: 'previous',
    };
    const navigate = spyOn(component.navigate, 'emit');

    component.nextPage();

    expect(navigate).not.toHaveBeenCalled();
  });

  it('should not emit value previousPage is called and pagination previous is undefined', () => {
    fixture.detectChanges();
    component.pagination = {
      next: 'next',
      previous: null,
    };
    const navigate = spyOn(component.navigate, 'emit');

    component.previousPage();

    expect(navigate).not.toHaveBeenCalled();
  });

  it('should return hasNextPage as true when pagination is defined', () => {
    component.pagination = {
      next: 'next',
      previous: 'previous',
    };
    fixture.detectChanges();

    expect(component.hasNextPage).toBeTruthy();
  });

  it('should return hasNextPage as false when pagination is undefined', () => {
    component.pagination = {
      next: null,
      previous: 'previous',
    };
    fixture.detectChanges();

    expect(component.hasNextPage).toBeFalsy();
  });

  it('should return hasPreviousPage as true when pagination is defined', () => {
    component.pagination = {
      next: 'next',
      previous: 'previous',
    };
    fixture.detectChanges();

    expect(component.hasPreviousPage).toBeTruthy();
  });

  it('should return hasPreviousPage as false when pagination is undefined', () => {
    component.pagination = {
      next: 'next',
      previous: null,
    };
    fixture.detectChanges();

    expect(component.hasPreviousPage).toBeFalsy();
  });

  it('should have button next with disabled attribute when pagination next is null', () => {
    component.pagination = {
      next: null,
      previous: 'previous',
    };
    fixture.detectChanges();

    const buttonNext = fixture.debugElement.nativeElement.querySelector(
      '.pagination-button--next'
    );

    expect(buttonNext.disabled).toBeTruthy();
  });

  it('should have button previous with disabled attribute when pagination previous is null', () => {
    component.pagination = {
      next: 'next',
      previous: null,
    };
    fixture.detectChanges();

    const buttonPrevious = fixture.debugElement.nativeElement.querySelector(
      '.pagination-button--previous'
    );

    expect(buttonPrevious.disabled).toBeTruthy();
  });
});
