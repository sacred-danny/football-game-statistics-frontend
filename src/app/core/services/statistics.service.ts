import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../../config/config';

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

export interface Statistics {
  index: number;
  background: string;
  title: string;
  columns: any;
  data: any;
  showDataCount: number;
}

export interface StatisticsResponse {
  stats: Array<any>;
  createAt: Date;
}

export class StatisticsService {

  stats: Array<Statistics>;
  titlePrefix = 'Grid Example ';

  primaryTitle = 'Grid Example 1';
  primaryBackground = '#98d9eb';

  ColumnGroup = {
    CurrentData: 'CURRENT_DATA',
    PrevData: 'PREV_DATA',
    StatisticsData: 'STATISTICS_DATA',
    AlertData: 'ALERT_DATA',
    DeleteData: 'DELETE_DATA',
  };

  primaryColumns = [
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
  ];

  currentStatistic: any[];

  constructor(private http: HttpClient) {
    this.stats = [];
    this.currentStatistic = [];
  }

  formatStatistics(stats: any) {
    // @ts-ignore
    this.stats[0] = {
      index: 0,
      title: this.primaryTitle,
      background: this.primaryBackground,
      columns: JSON.parse(JSON.stringify(this.primaryColumns)),
      data: stats,
      showDataCount: 0
    };
  }

  async getLastOneStat() {
    try {
      this.currentStatistic = [];
      const res: StatisticsResponse = await this.http.get<StatisticsResponse>(`${config.api}/stats`).toPromise();
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < res.stats.length; i++) {
        const temp = {
          GameTime: res.stats[i].GameTime,
          Score: res.stats[i].Score,
          // tslint:disable-next-line:max-line-length
          TeamNames: [(res.stats[i].HomeName + '(' + res.stats[i].HomePosition + ')' + res.stats[i].KickOffTime),
            (res.stats[i].AwayName + '(' + res.stats[i].AwayPosition + ')' + res.stats[i].KickOffTime),
            true,
          ],
          TotalAwayGoals: res.stats[i].Stats.TotalAwayGoals,
          TotalHomeGoals: res.stats[i].Stats.TotalHomeGoals,
          HomeAttackRatio: res.stats[i].Stats.HomeAttackRatio,
          AwayAttackRatio: res.stats[i].Stats.AwayAttackRatio,
          TotalOnTargets: [res.stats[i].Stats.TotalHomeOnTarget, res.stats[i].Stats.TotalAwayOnTarget],
          TotalOffTargets: [res.stats[i].Stats.TotalHomeOffTarget, res.stats[i].Stats.TotalAwayOffTarget],
          TotalAttacks: [res.stats[i].Stats.TotalHomeAttacks, res.stats[i].Stats.TotalAwayAttacks],
          // tslint:disable-next-line:max-line-length
          TotalDangerousAttacks: [res.stats[i].Stats.TotalHomeDangerousAttacks, res.stats[i].Stats.TotalAwayDangerousAttacks],
          TotalCorners: [res.stats[i].Stats.TotalHomeCorners, res.stats[i].Stats.TotalAwayCorners],
          TotalPossessions: [res.stats[i].Stats.TotalHomePossession, res.stats[i].Stats.TotalAwayPossession],
          TotalYellowCards: [res.stats[i].Stats.TotalHomeYellowCards, res.stats[i].Stats.TotalHomeYellowCards],
          TotalRedCards: [res.stats[i].Stats.TotalHomeRedCards, res.stats[i].Stats.TotalHomeRedCards],
          TotalGraphs1: [5, 0],
          TotalGraphs2: [20, 0],
          ShotsOnTargets: [res.stats[i].Stats.HomeLast10.ShotsOnTarget, res.stats[i].Stats.AwayLast10.ShotsOnTarget],
          ShotsOffTargets: [res.stats[i].Stats.HomeLast10.ShotsOffTarget, res.stats[i].Stats.AwayLast10.ShotsOffTarget],
          ShotsAttacks: [res.stats[i].Stats.HomeLast10.Attacks, res.stats[i].Stats.AwayLast10.Attacks],
          // tslint:disable-next-line:max-line-length
          ShotsDangerousAttacks: [res.stats[i].Stats.HomeLast10.DangerousAttacks, res.stats[i].Stats.AwayLast10.DangerousAttacks],
          ShotsCorners: [res.stats[i].Stats.HomeLast10.Corners, res.stats[i].Stats.AwayLast10.Corners],
          ShotsGoals: [res.stats[i].Stats.HomeLast10.Goals, res.stats[i].Stats.AwayLast10.Goals],
          ShotsPressureIndex: [res.stats[i].Stats.HomeLast10.PressureIndex, res.stats[i].Stats.AwayLast10.PressureIndex],
          matched: false,
          show: true
        };
        // @ts-ignore
        this.currentStatistic.push(temp);
      }
      this.formatStatistics(this.currentStatistic);
    } catch (e) {
      throw e;
    }
  }
}

@Injectable()
export class EvenStatisticsService extends StatisticsService {
  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }
}
