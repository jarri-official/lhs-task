import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListSearchComponent } from './movie-list-search.component';

describe('MovieListSearchComponent', () => {
  let component: MovieListSearchComponent;
  let fixture: ComponentFixture<MovieListSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieListSearchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieListSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
