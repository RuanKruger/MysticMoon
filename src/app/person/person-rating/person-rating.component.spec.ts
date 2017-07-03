import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonRatingComponent } from './person-rating.component';

describe('PersonRatingComponent', () => {
  let component: PersonRatingComponent;
  let fixture: ComponentFixture<PersonRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonRatingComponent } from './person-rating.component';

describe('PersonRatingComponent', () => {
  let component: PersonRatingComponent;
  let fixture: ComponentFixture<PersonRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
