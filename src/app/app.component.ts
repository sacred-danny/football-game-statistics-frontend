import { Component } from '@angular/core';
import {StatisticsComponent} from './ui-kit/statistics/statistics.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  statistics: any;

  constructor() {
    this.statistics = [{
      title: 'Grid Example 1',
      background: '#98d9eb'
    }];
  }

  make_backround_color() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  addStatistics() {
    const statisticsIndex = this.statistics.length + 1;
    this.statistics.push(
      {
        title: 'Grid Example ' + statisticsIndex,
        background: this.make_backround_color(),
      }
    );
  }
}
