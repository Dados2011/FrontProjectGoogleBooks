import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBookCollectionComponent } from './card-book-collection.component';

describe('CardBookCollectionComponent', () => {
  let component: CardBookCollectionComponent;
  let fixture: ComponentFixture<CardBookCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardBookCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBookCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
