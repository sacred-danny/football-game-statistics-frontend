import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../../config/config';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})

export interface Statistics {
  index: number;
  background: string;
  title: string;
  columns: any;
  data: any;
  statsFilterQuery: any;
  showDataCount: number;
  isFirstClicked: boolean;
  isSecondClicked: boolean;
  isDominanceClicked: boolean;
  isUnderScalpClicked: boolean;
  searchText: string;
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
  selectedStatsIndex = 0;

  ColumnGroup = {
    CurrentData: 'CURRENT_DATA',
    PrevData: 'PREV_DATA',
    StatisticsData: 'STATISTICS_DATA',
    AlertData: 'ALERT_DATA',
    DeleteData: 'DELETE_DATA',
  };

  primaryColumns = [
    {
      group: this.ColumnGroup.CurrentData,
      columns: [
        { icon: 'time.png', name: 'GameTime', width: '', group: this.ColumnGroup.CurrentData, show: true },
        { icon: 'football.png', name: 'Score', width: '', group: this.ColumnGroup.CurrentData, show: true },
        { icon: '', name: 'TeamNames', width: '', isSearch: true, group: this.ColumnGroup.CurrentData, show: true },
        { icon: 'on-target.png', name: 'TotalOnTargets', width: '', group: this.ColumnGroup.CurrentData, show: true },
        { icon: 'off-target.png', name: 'TotalOffTargets', width: '', group: this.ColumnGroup.CurrentData, show: true },
        { icon: 'attack.png', name: 'TotalAttacks', width: '', group: this.ColumnGroup.CurrentData, show: true },
        { icon: 'dangerous-attack.png', name: 'TotalDangerousAttacks', width: '', group: this.ColumnGroup.CurrentData, show: true },
        { icon: 'corner.png', name: 'TotalCorners', width: '', group: this.ColumnGroup.CurrentData, show: true },
        { icon: 'possession.png', name: 'TotalPossessions', width: '', group: this.ColumnGroup.CurrentData, show: true },
        { icon: 'yellow-card.png', name: 'TotalYellowCards', width: '', group: this.ColumnGroup.CurrentData, show: true },
        { icon: 'red-card.png', name: 'TotalRedCards', width: '', group: this.ColumnGroup.CurrentData, show: true },
        { icon: 'graph-1.png', name: 'TotalGraphs1', width: '', group: this.ColumnGroup.CurrentData, show: true },
        { icon: 'graph-2.png', name: 'TotalGraphs2', width: '', group: this.ColumnGroup.CurrentData, show: true },
      ],
      show: true
    },
    {
      group: this.ColumnGroup.PrevData,
      width: '300px',
      headerText: 'Previous 10 minutes',
      columns: [
        { icon: 'on-target.png', name: 'ShotsOnTargets', width: '', group: this.ColumnGroup.PrevData, show: true },
        { icon: 'off-target.png', name: 'ShotsOffTargets', width: '', group: this.ColumnGroup.PrevData, show: true },
        { icon: 'attack.png', name: 'ShotsAttacks', width: '', group: this.ColumnGroup.PrevData, show: true },
        { icon: 'dangerous-attack.png', name: 'ShotsDangerousAttacks', width: '', group: this.ColumnGroup.PrevData, show: true },
        { icon: 'corner.png', name: 'ShotsCorners', width: '', group: this.ColumnGroup.PrevData, show: true },
        { icon: 'football.png', name: 'ShotsGoals', width: '', group: this.ColumnGroup.PrevData, show: true },
        { icon: 'pi.png', name: 'ShotsPressureIndex', width: '', group: this.ColumnGroup.PrevData, show: true },
      ],
      show: true
    },
    {
      group: this.ColumnGroup.StatisticsData,
      width: '200px',
      columns: [
        { icon: 'sparkline-header.png', name: '', width: '', group: this.ColumnGroup.StatisticsData, show: true },
      ],
      show: true
    },
    {
      group: this.ColumnGroup.AlertData,
      width: '40px',
      columns: [
        { icon: 'alert-header.png', name: '', width: '', group: this.ColumnGroup.AlertData, show: true },
      ],
      show: true
    },
    {
      group: this.ColumnGroup.DeleteData,
      width: '40px',
      columns: [
        { icon: 'trash-header.png', name: '', width: '', group: this.ColumnGroup.DeleteData, show: true },
      ],
      show: true
    }
  ];
  statType = [
    {title: 'Please Select', value: ''},
    {title: 'Time', value: 'OriginalAllStats.GameTime'},
    {title: 'Score', value: 'OriginalAllStats.Score'},
    {title: 'Goals', value: 'OriginalAllStats.TotalGoals'},
    {title: 'Home Goals', value: 'OriginalAllStats.Stats.HomeGoals'},
    {title: 'Away Goals', value: 'OriginalAllStats.Stats.AwayGoals'},
    {title: 'Shots on Target', value: 'OriginalAllStats.Stats.TotalOnTarget'},
    {title: 'Home Shots on Target', value: 'OriginalAllStats.Stats.TotalHomeOnTarget'},
    {title: 'Away Shots on Target', value: 'OriginalAllStats.Stats.TotalAwayOnTarget'},
    {title: 'Shots off Target', value: 'OriginalAllStats.Stats.TotalOffTarget'},
    {title: 'Home Shots off Target', value: 'OriginalAllStats.Stats.TotalHomeOffTarget'},
    {title: 'Away Shots off Target', value: 'OriginalAllStats.Stats.TotalAwayOffTarget'},
    {title: 'Attacks', value: 'OriginalAllStats.Stats.TotalAttacks'},
    {title: 'Home Attacks', value: 'OriginalAllStats.Stats.TotalHomeAttacks'},
    {title: 'Away Attacks', value: 'OriginalAllStats.Stats.TotalAwayAttacks'},
    {title: 'Dangerous Attacks', value: 'OriginalAllStats.Stats.TotalDangerousAttacks'},
    {title: 'Home Dangerous Attacks', value: 'OriginalAllStats.Stats.TotalHomeDangerousAttacks'},
    {title: 'Away Dangerous Attacks', value: 'OriginalAllStats.Stats.TotalAwayDangerousAttacks'},
    {title: 'Corners', value: 'OriginalAllStats.Stats.TotalCorners'},
    {title: 'Home Corners', value: 'OriginalAllStats.Stats.TotalHomeCorners'},
    {title: 'Away Corners', value: 'OriginalAllStats.Stats.TotalAwayCorners'},
    {title: 'Home Goals', value: 'OriginalAllStats.Stats.TotalHomeGoals'},
    {title: 'Home Possession', value: 'OriginalAllStats.Stats.TotalHomePossession'},
    {title: 'Away Possession', value: 'OriginalAllStats.Stats.TotalAwayPossession'},
    {title: 'Yellow Cards', value: 'OriginalAllStats.TotalYellowCards'},
    {title: 'Home Yellow Cards', value: 'OriginalAllStats.Stats.TotalHomeYellowCards'},
    {title: 'Away Yellow Cards', value: 'OriginalAllStats.Stats.TotalAwayYellowCards'},
    {title: 'Red Cards', value: 'OriginalAllStats.Stats.TotalRedCards'},
    {title: 'Home Red Cards', value: 'OriginalAllStats.Stats.TotalHomeRedCards'},
    {title: 'Away Red Cards', value: 'OriginalAllStats.Stats.TotalAwayRedCards'},
    {title: 'Home A to DA Ratio', value: 'OriginalAllStats.Stats.HomeAttackRatio'},
    {title: 'Away A to DA Ratio', value: 'OriginalAllStats.Stats.AwayAttackRatio'},
    {title: 'L10 Home - Shots on Target', value: 'OriginalAllStats.Stats.HomeLast10.ShotsOnTarget'},
    {title: 'L10 Home - Shots off Target', value: 'OriginalAllStats.Stats.HomeLast10.ShotsOffTarget'},
    {title: 'L10 Home - Corners', value: 'OriginalAllStats.Stats.HomeLast10.Corners'},
    {title: 'L10 Home - Attacks', value: 'OriginalAllStats.Stats.HomeLast10.Attacks'},
    {title: 'L10 Home - Dangerous Attacks', value: 'OriginalAllStats.Stats.HomeLast10.DangerousAttacks'},
    {title: 'L10 Home - Goals', value: 'OriginalAllStats.Stats.HomeLast10.Goals'},
    {title: 'L10 Home - PressureIndex', value: 'OriginalAllStats.Stats.HomeLast10.PressureIndex'},
    {title: 'L10 Away - Shots on Target', value: 'OriginalAllStats.Stats.AwayLast10.ShotsOnTarget'},
    {title: 'L10 Away - Shots off Target', value: 'OriginalAllStats.Stats.AwayLast10.ShotsOffTarget'},
    {title: 'L10 Away Corners', value: 'OriginalAllStats.Stats.AwayLast10.Corners'},
    {title: 'L10 Away Attacks', value: 'OriginalAllStats.Stats.AwayLast10.Attacks'},
    {title: 'L10 Away Dangerous Attacks', value: 'OriginalAllStats.Stats.AwayLast10.DangerousAttacks'},
    {title: 'L10 Away Goals', value: 'OriginalAllStats.Stats.AwayLast10.Goals'},
    {title: 'L10 Away PressureIndex', value: 'OriginalAllStats.Stats.AwayLast10.PressureIndex'},
  ];
  filterType = [
    {title: 'Please Select', value: ''},
    {title: '=', value: '==='},
    {title: '<', value: '<'},
    {title: '<=', value: '<='},
    {title: '>', value: '>'},
    {title: '>=', value: '>='},
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
      data: JSON.parse(JSON.stringify(this.currentStatistic)),
      statsFilterQuery: [],
      showDataCount: 0,
      isFirstClicked: false,
      isSecondClicked: false,
      isDominanceClicked: false,
      isUnderScalpClicked: false,
      searchText: ''
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
          TotalOnTargets: [res.stats[i].Stats.TotalHomeOnTarget, res.stats[i].Stats.TotalAwayOnTarget],
          TotalOffTargets: [res.stats[i].Stats.TotalHomeOffTarget, res.stats[i].Stats.TotalAwayOffTarget],
          TotalAttacks: [res.stats[i].Stats.TotalHomeAttacks, res.stats[i].Stats.TotalAwayAttacks],
          // tslint:disable-next-line:max-line-length
          TotalDangerousAttacks: [res.stats[i].Stats.TotalHomeDangerousAttacks, res.stats[i].Stats.TotalAwayDangerousAttacks],
          TotalCorners: [res.stats[i].Stats.TotalHomeCorners, res.stats[i].Stats.TotalAwayCorners],
          TotalPossessions: [res.stats[i].Stats.TotalHomePossession, res.stats[i].Stats.TotalAwayPossession],
          TotalYellowCards: [res.stats[i].Stats.TotalHomeYellowCards, res.stats[i].Stats.TotalHomeYellowCards],
          TotalRedCards: [res.stats[i].Stats.TotalHomeRedCards, res.stats[i].Stats.TotalHomeRedCards],
          TotalGraphs1: [0, 0],
          TotalGraphs2: [0, 0],
          ShotsOnTargets: [res.stats[i].Stats.HomeLast10.ShotsOnTarget, res.stats[i].Stats.AwayLast10.ShotsOnTarget],
          ShotsOffTargets: [res.stats[i].Stats.HomeLast10.ShotsOffTarget, res.stats[i].Stats.AwayLast10.ShotsOffTarget],
          ShotsAttacks: [res.stats[i].Stats.HomeLast10.Attacks, res.stats[i].Stats.AwayLast10.Attacks],
          // tslint:disable-next-line:max-line-length
          ShotsDangerousAttacks: [res.stats[i].Stats.HomeLast10.DangerousAttacks, res.stats[i].Stats.AwayLast10.DangerousAttacks],
          ShotsCorners: [res.stats[i].Stats.HomeLast10.Corners, res.stats[i].Stats.AwayLast10.Corners],
          ShotsGoals: [res.stats[i].Stats.HomeLast10.Goals, res.stats[i].Stats.AwayLast10.Goals],
          ShotsPressureIndex: [res.stats[i].Stats.HomeLast10.PressureIndex, res.stats[i].Stats.AwayLast10.PressureIndex],
          matched: false,
          show: true,
          OriginalAllStats: res.stats[i]
        };
        temp.OriginalAllStats.TotalGoals = parseInt(temp.OriginalAllStats.HomeGoals, 10) + parseInt(temp.OriginalAllStats.AwayGoals, 10);
        // tslint:disable-next-line:max-line-length
        temp.OriginalAllStats.TotalYellowCards = parseInt(temp.OriginalAllStats.Stats.TotalHomeYellowCards, 10) + parseInt(temp.OriginalAllStats.Stats.TotalAwayYellowCards, 10);
        // tslint:disable-next-line:max-line-length
        temp.OriginalAllStats.TotalRedCards = parseInt(temp.OriginalAllStats.Stats.TotalHomeRedCards, 10) +  parseInt(temp.OriginalAllStats.Stats.TotalAwayRedCards, 10);

        if (res.stats[i].AttackingPressureGraphsExists === true) {
          // @ts-ignore
          temp.TotalGraphs1[0] = {
            id: res.stats[i].AttackingPressureGraphs[0].GraphTypeId,
            value: res.stats[i].AttackingPressureGraphs[0].GraphData
          };
          // @ts-ignore
          temp.TotalGraphs1[1] = {
            id: res.stats[i].AttackingPressureGraphs[2].GraphTypeId,
            value: res.stats[i].AttackingPressureGraphs[2].GraphData
          };

          // @ts-ignore
          temp.TotalGraphs2[0] = {
            id: res.stats[i].AttackingPressureGraphs[1].GraphTypeId,
            value: res.stats[i].AttackingPressureGraphs[1].GraphData
          };

          // @ts-ignore
          temp.TotalGraphs2[1] = {
            id: res.stats[i].AttackingPressureGraphs[3].GraphTypeId,
            value: res.stats[i].AttackingPressureGraphs[3].GraphData
          };
        }

        this.currentStatistic.push(temp);
      }
      this.formatStatistics(this.currentStatistic);
    } catch (e) {
      throw e;
    }
  }

  allQuickFilter(statisticsIndex: number) {
    this.selectedStatsIndex = statisticsIndex;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.stats[statisticsIndex].data.length; i++) {
      this.stats[statisticsIndex].data[i].show = false;
    }

    let query = '';

    if (this.stats[statisticsIndex].isFirstClicked) {
      query += 'this.stats[statisticsIndex].data[i].GameTime <= 45 &&';
    }

    if (this.stats[statisticsIndex].isSecondClicked) {
      query += 'this.stats[statisticsIndex].data[i].GameTime > 45 &&';
    }

    if (this.stats[statisticsIndex].isDominanceClicked) {
      query += 'this.stats[statisticsIndex].data[i].OriginalAllStats.Stats.TotalAwayGoals > this.stats[statisticsIndex].data[i].OriginalAllStats.Stats.TotalHomeGoals &&';
      query += 'this.stats[statisticsIndex].data[i].ShotsPressureIndex[0] > 20 &&';
    }

    if (this.stats[statisticsIndex].isUnderScalpClicked) {
      query += 'this.stats[statisticsIndex].data[i].OriginalAllStats.Stats.HomeAttackRatio < 70 &&';
      query += 'this.stats[statisticsIndex].data[i].OriginalAllStats.Stats.AwayAttackRatio < 70 &&';
      query += 'this.stats[statisticsIndex].data[i].ShotsGoals[0] === "0" &&';
      query += 'this.stats[statisticsIndex].data[i].ShotsPressureIndex[0] < 30 &&';
      query += 'this.stats[statisticsIndex].data[i].ShotsGoals[1] === "0" &&';
      query += 'this.stats[statisticsIndex].data[i].ShotsPressureIndex[1] < 30 &&';
    }

    query += ' true';
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.stats[statisticsIndex].data.length; i++) {
      // tslint:disable-next-line:no-eval
      if (eval(query)) {
        let statsDataString = JSON.stringify(this.stats[statisticsIndex].data[i]);
        const splitStartIndex = statsDataString.indexOf('OriginalAllStats');
        const substring = statsDataString.substring(splitStartIndex, statsDataString.length - 1);
        statsDataString = statsDataString.replace(substring, '');
        if (statsDataString.indexOf(this.stats[statisticsIndex].searchText) >= 0) {
          this.stats[statisticsIndex].data[i].show = true;
        }
      }
    }

    this.stats[statisticsIndex].showDataCount = 0;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.stats[statisticsIndex].data.length; i++) {
      // tslint:disable-next-line:no-eval
      if (this.stats[statisticsIndex].data[i].show === true) {
        this.stats[statisticsIndex].showDataCount++;
      }
    }

    if (this.stats[statisticsIndex].showDataCount === 0) {
      this.stats[statisticsIndex].showDataCount = -1;
    }
  }

  allStatsFilter(statisticsIndex: number) {
    this.selectedStatsIndex = statisticsIndex;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.stats[statisticsIndex].data.length; i++) {
      this.stats[statisticsIndex].data[i].show = false;
    }

    let query = 'true';
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.stats[statisticsIndex].statsFilterQuery.length; i++) {
      query += this.stats[statisticsIndex].statsFilterQuery[i];
    }
    console.log(query);
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.stats[statisticsIndex].data.length; i++) {
      // tslint:disable-next-line:no-eval
      if (eval(query)) {
        let statsDataString = JSON.stringify(this.stats[statisticsIndex].data[i]);
        const splitStartIndex = statsDataString.indexOf('OriginalAllStats');
        const substring = statsDataString.substring(splitStartIndex, statsDataString.length - 1);
        statsDataString = statsDataString.replace(substring, '');
        if (statsDataString.indexOf(this.stats[statisticsIndex].searchText) >= 0) {
          this.stats[statisticsIndex].data[i].show = true;
        }
      }
    }

    this.stats[statisticsIndex].showDataCount = 0;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.stats[statisticsIndex].data.length; i++) {
      // tslint:disable-next-line:no-eval
      if (this.stats[statisticsIndex].data[i].show === true) {
        this.stats[statisticsIndex].showDataCount++;
      }
    }

    if (this.stats[statisticsIndex].showDataCount === 0) {
      this.stats[statisticsIndex].showDataCount = -1;
    }
  }
}

@Injectable()
export class EvenStatisticsService extends StatisticsService {
  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }
}
