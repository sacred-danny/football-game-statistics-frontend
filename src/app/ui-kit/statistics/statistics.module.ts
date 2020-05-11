import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { TableModule } from '../table/table.module';
import { StatsModalModule } from '../stats-modal/stats-modal.module';
import { SettingModule } from '../setting/setting.module';
import { StatisticsComponent } from './statistics.component';


@NgModule({
  declarations: [StatisticsComponent, StatisticsComponent],
  imports: [
    CommonModule,
    TableModule,
    SettingModule,
    StatsModalModule
  ],
  exports: [StatisticsComponent, StatisticsComponent,],
})
export class StatisticsModule {
}
