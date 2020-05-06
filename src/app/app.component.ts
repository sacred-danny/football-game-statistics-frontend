import { Component } from '@angular/core';
import { StatisticsComponent } from './ui-kit/statistics/statistics.component';
import { StatisticsService } from './core/services/statistics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  statistics: any;

  constructor(private statisticsService: StatisticsService) {
    this.statistics = [{
      index: 0,
      title: this.statisticsService.primaryTitle,
      background: this.statisticsService.primaryBackground
    }];
    this.statisticsService.status = [{
      index: 0,
      title: this.statisticsService.primaryTitle,
      background: this.statisticsService.primaryBackground,
      showSparkLine: true
    }];
    this.statisticsService.activeIndex = 0;
  }

  make_backround_color() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  addStatistics() {
    const statisticsIndex = this.statistics.length + 1;
    const backgroundColor = this.make_backround_color();
    this.statistics.push(
      {
        index: statisticsIndex - 1,
        title: this.statisticsService.titlePrefix + statisticsIndex,
        background: backgroundColor,
      }
    );

    this.statisticsService.status.push({
      index: statisticsIndex - 1,
      title: this.statisticsService.titlePrefix + statisticsIndex,
      background: backgroundColor,
      showSparkLine: true
    });
  }
}
