import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomQuotesContentComponent } from './random-quotes-content.component';

describe('RandomQuotesContentComponent', () => {
  let component: RandomQuotesContentComponent;
  let fixture: ComponentFixture<RandomQuotesContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomQuotesContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomQuotesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
