import { Component, Input, OnInit } from '@angular/core';
import { StatisticsService} from '../../core/services/statistics.service';
import { falseIfMissing } from 'protractor/built/util';
import { operators } from 'rxjs/internal/Rx';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  @Input() title: any;
  @Input() statisticsIndex: any;

  // click statistics for Main buttons
  isQuickFilterClicked = false;
  isStatsFilterClicked = false;
  isSettingsClicked = false;

  // click statistics for Quick Filter's buttons
  isFirstClicked = false;
  isSecondClicked = false;
  isDominanceClicked = false;
  isUnderScalpClicked = false;

  constructor(private statisticsService: StatisticsService) {
  }

  ngOnInit(): void {
  }

  visibleColumn() {
    this.statisticsService.stats[this.statisticsIndex].columns[2].show =
      !this.statisticsService.stats[this.statisticsIndex].columns[2].show;
  }

  filterQuick() {
    this.isQuickFilterClicked = !this.isQuickFilterClicked;
  }

  filterStat() {
    this.isStatsFilterClicked = !this.isStatsFilterClicked;
  }

  allQuickFilter() {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.statisticsService.stats[this.statisticsIndex].data.length; i++) {
      this.statisticsService.stats[this.statisticsIndex].data[i].show = false;
    }

    let query = '';

    if (this.isFirstClicked) {
      query += 'this.statisticsService.stats[this.statisticsIndex].data[i].GameTime <= 45 &&';
    }

    if (this.isSecondClicked) {
      query += 'this.statisticsService.stats[this.statisticsIndex].data[i].GameTime > 45 &&';
    }

    if (this.isDominanceClicked) {
      query += 'this.statisticsService.stats[this.statisticsIndex].data[i].TotalAwayGoals > this.statisticsService.stats[this.statisticsIndex].data[i].TotalHomeGoals &&';
      query += 'this.statisticsService.stats[this.statisticsIndex].data[i].ShotsPressureIndex[0] > 20 &&';
    }

    if (this.isUnderScalpClicked) {
      query += 'this.statisticsService.stats[this.statisticsIndex].data[i].HomeAttackRatio < 70 &&';
      query += 'this.statisticsService.stats[this.statisticsIndex].data[i].AwayAttackRatio < 70 &&';
      query += 'this.statisticsService.stats[this.statisticsIndex].data[i].ShotsGoals[0] === "0" &&';
      query += 'this.statisticsService.stats[this.statisticsIndex].data[i].ShotsPressureIndex[0] < 30 &&';
      query += 'this.statisticsService.stats[this.statisticsIndex].data[i].ShotsGoals[1] === "0" &&';
      query += 'this.statisticsService.stats[this.statisticsIndex].data[i].ShotsPressureIndex[1] < 30 &&';
    }

    query += ' true';

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.statisticsService.stats[this.statisticsIndex].data.length; i++) {
      // tslint:disable-next-line:no-eval
      if (eval(query)) {
        this.statisticsService.stats[this.statisticsIndex].data[i].show = true;
      }
    }

    this.statisticsService.stats[this.statisticsIndex].showDataCount = 0;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.statisticsService.stats[this.statisticsIndex].data.length; i++) {
      // tslint:disable-next-line:no-eval
      if (this.statisticsService.stats[this.statisticsIndex].data[i].show === true) {
        this.statisticsService.stats[this.statisticsIndex].showDataCount++;
      }
    }

    if (this.statisticsService.stats[this.statisticsIndex].showDataCount === 0) {
      this.statisticsService.stats[this.statisticsIndex].showDataCount = -1;
    }
  }

  firstHalf() {
    this.isFirstClicked = !this.isFirstClicked;
    this.allQuickFilter();
  }

  secondHalf() {
    this.isSecondClicked = !this.isSecondClicked;
    this.allQuickFilter();
  }

  dominance() {
    this.isDominanceClicked = !this.isDominanceClicked;
    this.allQuickFilter();
  }

  underScalp() {
    this.isUnderScalpClicked = !this.isUnderScalpClicked;
    this.allQuickFilter();
  }
}
