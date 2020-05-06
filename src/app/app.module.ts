import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StatisticsModule } from './ui-kit/statistics/statistics.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StatisticsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
