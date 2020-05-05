import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsRowComponent } from './settings-row.component';

describe('SettingsRowComponent', () => {
  let component: SettingsRowComponent;
  let fixture: ComponentFixture<SettingsRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
