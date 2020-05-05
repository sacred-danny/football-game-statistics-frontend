import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchContentRowComponent } from './match-content-row.component';

describe('MatchContentRowComponent', () => {
  let component: MatchContentRowComponent;
  let fixture: ComponentFixture<MatchContentRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchContentRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchContentRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
