import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { _MatMenuDirectivesModule, MatMenuModule } from '@angular/material/menu';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { TableComponent } from './table.component';
import { LineChartComponent } from '../line-chart/line-chart.component';
import { BarChartComponent } from '../bar-chart/bar-chart.component';


@NgModule({
  declarations: [
    TableComponent,
    LineChartComponent,
    BarChartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    _MatMenuDirectivesModule,
    MatMenuModule,
    NgxChartsModule
  ],
  exports: [
    TableComponent,
    LineChartComponent,
    BarChartComponent
  ]
})
export class TableModule {
}
