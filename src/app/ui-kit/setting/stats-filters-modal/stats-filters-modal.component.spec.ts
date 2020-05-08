import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsFiltersModalComponent } from './stats-filters-modal.component';

describe('StatsFiltersModalComponent', () => {
  let component: StatsFiltersModalComponent;
  let fixture: ComponentFixture<StatsFiltersModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsFiltersModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsFiltersModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
