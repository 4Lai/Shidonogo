import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedBookRecommendedComponent } from './featured-book-recommended.component';

describe('FeaturedBookRecommendedComponent', () => {
  let component: FeaturedBookRecommendedComponent;
  let fixture: ComponentFixture<FeaturedBookRecommendedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturedBookRecommendedComponent]
    });
    fixture = TestBed.createComponent(FeaturedBookRecommendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
