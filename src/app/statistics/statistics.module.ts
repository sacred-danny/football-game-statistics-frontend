import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRowComponent } from './settings-row/settings-row.component';
import { StatisticsComponent } from './statistics.component';
import { HeaderRowComponent } from './header-row/header-row.component';
import { MatchContentRowComponent } from './match-content-row/match-content-row.component';



@NgModule({
  declarations: [SettingsRowComponent, StatisticsComponent, HeaderRowComponent, MatchContentRowComponent],
  imports: [
    CommonModule
  ],
  exports: [StatisticsComponent]
})
export class StatisticsModule { }
