import { Component, Input, OnInit } from '@angular/core';
import { StatisticsService } from '../../core/services/statistics.service';
import { falseIfMissing } from 'protractor/built/util';
import { operators } from 'rxjs/internal/Rx';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StatsModalComponent } from '../stats-modal/stats-modal.component';


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
  email: string | undefined;

  constructor(
    public statisticsService: StatisticsService,
    public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  visibleColumn() {
    this.statisticsService.selectedStatsIndex = this.statisticsIndex;
    this.statisticsService.stats[this.statisticsIndex].columns[2].show =
      !this.statisticsService.stats[this.statisticsIndex].columns[2].show;
  }

  filterQuick() {
    this.statisticsService.selectedStatsIndex = this.statisticsIndex;
    this.isQuickFilterClicked = !this.isQuickFilterClicked;
  }

  filterStat() {
    this.statisticsService.selectedStatsIndex = this.statisticsIndex;
    this.statisticsService.stats[this.statisticsIndex].statsFilterQuery = [];
    this.isStatsFilterClicked = !this.isStatsFilterClicked;
    const dialogRef = this.dialog.open(StatsModalComponent, {
      width: '70%',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.email = result;
    });
  }

  firstHalf() {
    this.statisticsService.selectedStatsIndex = this.statisticsIndex;
    this.statisticsService.stats[this.statisticsIndex].isFirstClicked = !this.statisticsService.stats[this.statisticsIndex].isFirstClicked;
    this.statisticsService.allQuickFilter(this.statisticsIndex);
  }

  secondHalf() {
    this.statisticsService.selectedStatsIndex = this.statisticsIndex;
    // tslint:disable-next-line:max-line-length
    this.statisticsService.stats[this.statisticsIndex].isSecondClicked = !this.statisticsService.stats[this.statisticsIndex].isSecondClicked;
    this.statisticsService.allQuickFilter(this.statisticsIndex);
  }

  dominance() {
    this.statisticsService.selectedStatsIndex = this.statisticsIndex;
    // tslint:disable-next-line:max-line-length
    this.statisticsService.stats[this.statisticsIndex].isDominanceClicked = !this.statisticsService.stats[this.statisticsIndex].isDominanceClicked;
    this.statisticsService.allQuickFilter(this.statisticsIndex);
  }

  underScalp() {
    this.statisticsService.selectedStatsIndex = this.statisticsIndex;
    // tslint:disable-next-line:max-line-length
    this.statisticsService.stats[this.statisticsIndex].isUnderScalpClicked = !this.statisticsService.stats[this.statisticsIndex].isUnderScalpClicked;
    this.statisticsService.allQuickFilter(this.statisticsIndex);
  }
}
