import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StatisticsModule } from './ui-kit/statistics/statistics.module';
import { EvenStatisticsService, StatisticsService } from './core/services/statistics.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StatisticsModule,
    HttpClientModule
  ],
  providers: [{ provide: StatisticsService, useClass: EvenStatisticsService }],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
