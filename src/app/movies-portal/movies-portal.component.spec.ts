import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesPortalComponent } from './movies-portal.component';

describe('MoviesPortalComponent', () => {
  let component: MoviesPortalComponent;
  let fixture: ComponentFixture<MoviesPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
