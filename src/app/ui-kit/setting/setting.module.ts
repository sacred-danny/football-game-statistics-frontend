import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingComponent } from './setting.component';
import { StatsFiltersModalComponent } from './stats-filters-modal/stats-filters-modal.component';

@NgModule({
  declarations: [
    SettingComponent,
    StatsFiltersModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SettingComponent
  ]
})
export class SettingModule {
}
