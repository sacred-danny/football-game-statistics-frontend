import { Component } from '@angular/core';
import { StatisticsComponent } from './ui-kit/statistics/statistics.component';
import { StatisticsService } from './core/services/statistics.service';

import * as jsonData from '../assets/json/match.json';


enum ColumnGroup {
  CurrentData = 'CURRENT_DATA',
  PrevData = 'PREV_DATA',
  StatisticsData = 'STATISTICS_DATA',
  AlertData = 'ALERT_DATA',
  DeleteData = 'DELETE_DATA',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  statistics: any;
  data = [];

  constructor(private statisticsService: StatisticsService) {

    const tempData: any[] = Array.of(jsonData);
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < tempData[0].default.length; i++) {
      const temp = {
        GameTime: tempData[0].default[i].GameTime,
        Score: tempData[0].default[i].Score,
        // tslint:disable-next-line:max-line-length
        TeamNames: [(tempData[0].default[i].HomeName + '(' + tempData[0].default[i].HomePosition + ')' + tempData[0].default[i].KickOffTime),
          (tempData[0].default[i].AwayName + '(' + tempData[0].default[i].AwayPosition + ')' + tempData[0].default[i].KickOffTime),
          true,
        ],
        TotalAwayGoals: tempData[0].default[i].Stats.TotalAwayGoals,
        TotalHomeGoals: tempData[0].default[i].Stats.TotalHomeGoals,
        HomeAttackRatio: tempData[0].default[i].Stats.HomeAttackRatio,
        AwayAttackRatio: tempData[0].default[i].Stats.AwayAttackRatio,
        TotalOnTargets: [tempData[0].default[i].Stats.TotalHomeOnTarget, tempData[0].default[i].Stats.TotalAwayOnTarget],
        TotalOffTargets: [tempData[0].default[i].Stats.TotalHomeOffTarget, tempData[0].default[i].Stats.TotalAwayOffTarget],
        TotalAttacks: [tempData[0].default[i].Stats.TotalHomeAttacks, tempData[0].default[i].Stats.TotalAwayAttacks],
        // tslint:disable-next-line:max-line-length
        TotalDangerousAttacks: [tempData[0].default[i].Stats.TotalHomeDangerousAttacks, tempData[0].default[i].Stats.TotalAwayDangerousAttacks],
        TotalCorners: [tempData[0].default[i].Stats.TotalHomeCorners, tempData[0].default[i].Stats.TotalAwayCorners],
        TotalPossessions: [tempData[0].default[i].Stats.TotalHomePossession, tempData[0].default[i].Stats.TotalAwayPossession],
        TotalYellowCards: [tempData[0].default[i].Stats.TotalHomeYellowCards, tempData[0].default[i].Stats.TotalHomeYellowCards],
        TotalRedCards: [tempData[0].default[i].Stats.TotalHomeRedCards, tempData[0].default[i].Stats.TotalHomeRedCards],
        TotalGraphs1: [5, 0],
        TotalGraphs2: [20, 0],
        ShotsOnTargets: [tempData[0].default[i].Stats.HomeLast10.ShotsOnTarget, tempData[0].default[i].Stats.AwayLast10.ShotsOnTarget],
        ShotsOffTargets: [tempData[0].default[i].Stats.HomeLast10.ShotsOffTarget, tempData[0].default[i].Stats.AwayLast10.ShotsOffTarget],
        ShotsAttacks: [tempData[0].default[i].Stats.HomeLast10.Attacks, tempData[0].default[i].Stats.AwayLast10.Attacks],
        // tslint:disable-next-line:max-line-length
        ShotsDangerousAttacks: [tempData[0].default[i].Stats.HomeLast10.DangerousAttacks, tempData[0].default[i].Stats.AwayLast10.DangerousAttacks],
        ShotsCorners: [tempData[0].default[i].Stats.HomeLast10.Corners, tempData[0].default[i].Stats.AwayLast10.Corners],
        ShotsGoals: [tempData[0].default[i].Stats.HomeLast10.Goals, tempData[0].default[i].Stats.AwayLast10.Goals],
        ShotsPressureIndex: [tempData[0].default[i].Stats.HomeLast10.PressureIndex, tempData[0].default[i].Stats.AwayLast10.PressureIndex],
        matched: false,
        show: true
      };
      // @ts-ignore
      this.data.push(temp);
    }

    this.statistics = [{
      index: 0,
      title: this.statisticsService.primaryTitle,
      background: this.statisticsService.primaryBackground
    }];

    this.statisticsService.status = [{
      index: 0,
      title: this.statisticsService.primaryTitle,
      background: this.statisticsService.primaryBackground,
      columns: [
        {
          group: ColumnGroup.CurrentData,
          columns: [
            { icon: 'time.png', name: 'GameTime', width: '', group: ColumnGroup.CurrentData, show: true },
            { icon: 'football.png', name: 'Score', width: '', group: ColumnGroup.CurrentData, show: true },
            { icon: '', name: 'TeamNames', width: '', isSearch: true, group: ColumnGroup.CurrentData, show: true },
            { icon: 'on-target.png', name: 'TotalOnTargets', width: '', group: ColumnGroup.CurrentData, show: true },
            { icon: 'off-target.png', name: 'TotalOffTargets', width: '', group: ColumnGroup.CurrentData, show: true },
            { icon: 'attack.png', name: 'TotalAttacks', width: '', group: ColumnGroup.CurrentData, show: true },
            { icon: 'dangerous-attack.png', name: 'TotalDangerousAttacks', width: '', group: ColumnGroup.CurrentData, show: true },
            { icon: 'corner.png', name: 'TotalCorners', width: '', group: ColumnGroup.CurrentData, show: true },
            { icon: 'possession.png', name: 'TotalPossessions', width: '', group: ColumnGroup.CurrentData, show: true },
            { icon: 'yellow-card.png', name: 'TotalYellowCards', width: '', group: ColumnGroup.CurrentData, show: true },
            { icon: 'red-card.png', name: 'TotalRedCards', width: '', group: ColumnGroup.CurrentData, show: true },
            { icon: 'graph-1.png', name: 'TotalGraphs1', width: '', group: ColumnGroup.CurrentData, show: true },
            { icon: 'graph-2.png', name: 'TotalGraphs2', width: '', group: ColumnGroup.CurrentData, show: true },
          ],
          show: true
        },
        {
          group: ColumnGroup.PrevData,
          width: '300px',
          headerText: 'Previous 10 minutes',
          columns: [
            { icon: 'on-target.png', name: 'ShotsOnTargets', width: '', group: ColumnGroup.PrevData, show: true },
            { icon: 'off-target.png', name: 'ShotsOffTargets', width: '', group: ColumnGroup.PrevData, show: true },
            { icon: 'attack.png', name: 'ShotsAttacks', width: '', group: ColumnGroup.PrevData, show: true },
            { icon: 'dangerous-attack.png', name: 'ShotsDangerousAttacks', width: '', group: ColumnGroup.PrevData, show: true },
            { icon: 'corner.png', name: 'ShotsCorners', width: '', group: ColumnGroup.PrevData, show: true },
            { icon: 'football.png', name: 'ShotsGoals', width: '', group: ColumnGroup.PrevData, show: true },
            { icon: 'pi.png', name: 'ShotsPressureIndex', width: '', group: ColumnGroup.PrevData, show: true },
          ],
          show: true
        },
        {
          group: ColumnGroup.StatisticsData,
          width: '200px',
          columns: [
            { icon: 'sparkline-header.png', name: '', width: '', group: ColumnGroup.StatisticsData, show: true },
          ],
          show: true
        },
        {
          group: ColumnGroup.AlertData,
          width: '40px',
          columns: [
            { icon: 'alert-header.png', name: '', width: '', group: ColumnGroup.AlertData, show: true },
          ],
          show: true
        },
        {
          group: ColumnGroup.DeleteData,
          width: '40px',
          columns: [
            { icon: 'trash-header.png', name: '', width: '', group: ColumnGroup.DeleteData, show: true },
          ],
          show: true
        }
      ],
      data: this.data,
      showDataCount: 0
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
      columns: [
        {
          group: ColumnGroup.CurrentData,
          columns: [
            { icon: 'time.png', name: 'GameTime', width: '', group: ColumnGroup.CurrentData, show: true },
            { icon: 'football.png', name: 'Score', width: '', group: ColumnGroup.CurrentData, show: true },
            { icon: '', name: 'TeamNames', width: '', isSearch: true, group: ColumnGroup.CurrentData, show: true },
            { icon: 'on-target.png', name: 'TotalOnTargets', width: '', group: ColumnGroup.CurrentData, show: true },
            { icon: 'off-target.png', name: 'TotalOffTargets', width: '', group: ColumnGroup.CurrentData, show: true },
            { icon: 'attack.png', name: 'TotalAttacks', width: '', group: ColumnGroup.CurrentData, show: true },
            { icon: 'dangerous-attack.png', name: 'TotalDangerousAttacks', width: '', group: ColumnGroup.CurrentData, show: true },
            { icon: 'corner.png', name: 'TotalCorners', width: '', group: ColumnGroup.CurrentData, show: true },
            { icon: 'possession.png', name: 'TotalPossessions', width: '', group: ColumnGroup.CurrentData, show: true },
            { icon: 'yellow-card.png', name: 'TotalYellowCards', width: '', group: ColumnGroup.CurrentData, show: true },
            { icon: 'red-card.png', name: 'TotalRedCards', width: '', group: ColumnGroup.CurrentData, show: true },
            { icon: 'graph-1.png', name: 'TotalGraphs1', width: '', group: ColumnGroup.CurrentData, show: true },
            { icon: 'graph-2.png', name: 'TotalGraphs2', width: '', group: ColumnGroup.CurrentData, show: true },
          ],
          show: true
        },
        {
          group: ColumnGroup.PrevData,
          width: '300px',
          headerText: 'Previous 10 minutes',
          columns: [
            { icon: 'on-target.png', name: 'ShotsOnTargets', width: '', group: ColumnGroup.PrevData, show: true },
            { icon: 'off-target.png', name: 'ShotsOffTargets', width: '', group: ColumnGroup.PrevData, show: true },
            { icon: 'attack.png', name: 'ShotsAttacks', width: '', group: ColumnGroup.PrevData, show: true },
            { icon: 'dangerous-attack.png', name: 'ShotsDangerousAttacks', width: '', group: ColumnGroup.PrevData, show: true },
            { icon: 'corner.png', name: 'ShotsCorners', width: '', group: ColumnGroup.PrevData, show: true },
            { icon: 'football.png', name: 'ShotsGoals', width: '', group: ColumnGroup.PrevData, show: true },
            { icon: 'pi.png', name: 'ShotsPressureIndex', width: '', group: ColumnGroup.PrevData, show: true },
          ],
          show: true
        },
        {
          group: ColumnGroup.StatisticsData,
          width: '200px',
          columns: [
            { icon: 'sparkline-header.png', name: '', width: '', group: ColumnGroup.StatisticsData, show: true },
          ],
          show: true
        },
        {
          group: ColumnGroup.AlertData,
          width: '40px',
          columns: [
            { icon: 'alert-header.png', name: '', width: '', group: ColumnGroup.AlertData, show: true },
          ],
          show: true
        },
        {
          group: ColumnGroup.DeleteData,
          width: '40px',
          columns: [
            { icon: 'trash-header.png', name: '', width: '', group: ColumnGroup.DeleteData, show: true },
          ],
          show: true
        }
      ],
      data: this.data,
      showDataCount: 0
    });
  }
}
