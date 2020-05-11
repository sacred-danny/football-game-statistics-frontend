import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../core/services/statistics.service';
import { config } from '../config/config';

enum ColumnGroup {
  CurrentData = 'CURRENT_DATA',
  PrevData = 'PREV_DATA',
  StatisticsData = 'STATISTICS_DATA',
  AlertData = 'ALERT_DATA',
  DeleteData = 'DELETE_DATA',
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  statistics: any;
  data = [];

  constructor(private statisticsService: StatisticsService) {
    this.statistics = [{
      index: 0,
      title: this.statisticsService.primaryTitle,
      background: this.statisticsService.primaryBackground
    }];
    // @ts-ignore
    setInterval(() => {
      this.statisticsService.getLastOneStat();
    }, config.intervalPeriod);
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

    this.statisticsService.stats.push({
      index: statisticsIndex - 1,
      title: this.statisticsService.titlePrefix + statisticsIndex,
      background: backgroundColor,
      columns: JSON.parse(JSON.stringify(this.statisticsService.primaryColumns)),
      data: JSON.parse(JSON.stringify(this.statisticsService.currentStatistic)),
      showDataCount: 0,
      statsFilterQuery: [],
      isFirstClicked: false,
      isSecondClicked: false,
      isDominanceClicked: false,
      isUnderScalpClicked: false,
      searchText: ''
    });
  }

  ngOnInit(): void {
  }
}
