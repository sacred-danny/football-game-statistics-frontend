import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsFilterComponent } from './stats-filter.component';

describe('StatsFilterComponent', () => {
  let component: StatsFilterComponent;
  let fixture: ComponentFixture<StatsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
