import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeRecomendedComponent } from './anime-recomended.component';

describe('AnimeRecomendedComponent', () => {
  let component: AnimeRecomendedComponent;
  let fixture: ComponentFixture<AnimeRecomendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeRecomendedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimeRecomendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
