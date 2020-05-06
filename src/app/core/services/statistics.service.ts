import { Injectable } from '@angular/core';
// @ts-ignore
@Injectable({
  providedIn: 'root'
})

export interface StatisticsStatus {
  index: number;
  background: string;
  title: string;
  showSparkLine: boolean;
}

export class StatisticsService {

  status: Array<StatisticsStatus>;
  activeIndex: number;
  titlePrefix = 'Grid Example ';

  primaryTitle = 'Grid Example 1';
  primaryBackground = '#98d9eb';

  constructor() {
    this.activeIndex = 0;
    this.status = [];
  }

  //ng build --prod --base-href "https://icarus96119.github.io/football-game-statistics/"
}
