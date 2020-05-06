import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from '../table/table.module';
import { SettingModule} from '../setting/setting.module';

import {StatisticsComponent} from './statistics.component';

@NgModule({
  declarations: [StatisticsComponent],
  imports: [
    CommonModule,
    TableModule,
    SettingModule
  ],
  exports: [StatisticsComponent]
})
export class StatisticsModule {
}
