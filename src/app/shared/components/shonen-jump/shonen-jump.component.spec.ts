import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShonenJumpComponent } from './shonen-jump.component';

describe('ShonenJumpComponent', () => {
  let component: ShonenJumpComponent;
  let fixture: ComponentFixture<ShonenJumpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShonenJumpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShonenJumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
