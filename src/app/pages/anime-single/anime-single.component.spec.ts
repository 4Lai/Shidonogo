import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeSingleComponent } from './anime-single.component';

describe('AnimeSingleComponent', () => {
  let component: AnimeSingleComponent;
  let fixture: ComponentFixture<AnimeSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimeSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
