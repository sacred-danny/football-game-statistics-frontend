import { Injectable } from '@angular/core';
// @ts-ignore
@Injectable({
  providedIn: 'root'
})

enum ColumnGroup {
  CurrentData = 'CURRENT_DATA',
  PrevData = 'PREV_DATA',
  StatisticsData = 'STATISTICS_DATA',
  AlertData = 'ALERT_DATA',
  DeleteData = 'DELETE_DATA',
}

export interface StatisticsStatus {
  index: number;
  background: string;
  title: string;
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
    },
  ];
  data: any;
  showDataCount: number;
}

export class StatisticsService {

  status: Array<StatisticsStatus>;
  activeIndex: number;
  titlePrefix = 'Grid Example ';

  primaryTitle = 'Grid Example 1';
  primaryBackground = '#98d9eb';

  ColumnGroup = {
    CurrentData : 'CURRENT_DATA',
    PrevData : 'PREV_DATA',
    StatisticsData : 'STATISTICS_DATA',
    AlertData : 'ALERT_DATA',
    DeleteData : 'DELETE_DATA',
  };

  constructor() {
    this.activeIndex = 0;
    this.status = [];
  }

  //ng build --prod --base-href "https://icarus96119.github.io/football-game-statistics-frontend/"
}
