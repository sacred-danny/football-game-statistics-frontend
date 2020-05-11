import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsModalComponent } from './stats-modal.component';

describe('StatsModalComponent', () => {
  let component: StatsModalComponent;
  let fixture: ComponentFixture<StatsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
