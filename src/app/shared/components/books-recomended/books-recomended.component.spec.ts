import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksRecomendedComponent } from './books-recomended.component';

describe('BooksRecomendedComponent', () => {
  let component: BooksRecomendedComponent;
  let fixture: ComponentFixture<BooksRecomendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksRecomendedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksRecomendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
