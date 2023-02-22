import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedMangaComponent } from './featured-manga.component';

describe('FeaturedMangaComponent', () => {
  let component: FeaturedMangaComponent;
  let fixture: ComponentFixture<FeaturedMangaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedMangaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedMangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
