import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import * as jsonData from '../../../assets/json/match.json';

enum ColumnGroup {
  CurrentData = 'CURRENT_DATA',
  PrevData = 'PREV_DATA',
  StatisticsData = 'STATISTICS_DATA',
  AlertData = 'ALERT_DATA',
  DeleteData = 'DELETE_DATA',
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  searchForm = new FormGroup({
    searchText: new FormControl(''),
  });

  ColumnGroup = ColumnGroup;

  prevData = [
    { icon: 'on-target.png', name: 'ShotsOnTargets', width: '', group: ColumnGroup.PrevData },
    { icon: 'off-target.png', name: 'ShotsOffTargets', width: '', group: ColumnGroup.PrevData },
    { icon: 'attack.png', name: 'ShotsAttacks', width: '', group: ColumnGroup.PrevData },
    { icon: 'dangerous-attack.png', name: 'ShotsDangerousAttacks', width: '', group: ColumnGroup.PrevData },
    { icon: 'corner.png', name: 'ShotsCorners', width: '', group: ColumnGroup.PrevData },
    { icon: 'football.png', name: 'ShotsGoals', width: '', group: ColumnGroup.PrevData },
    { icon: 'pi.png', name: 'ShotsPressureIndex', width: '', group: ColumnGroup.PrevData },
  ];
  currentData = [
    { icon: 'time.png', name: 'GameTime', width: '', group: ColumnGroup.CurrentData },
    { icon: 'football.png', name: 'Score', width: '', group: ColumnGroup.CurrentData },
    { icon: '', name: 'TeamNames', width: '', isSearch: true, group: ColumnGroup.CurrentData },
    { icon: 'on-target.png', name: 'TotalOnTargets', width: '', group: ColumnGroup.CurrentData },
    { icon: 'off-target.png', name: 'TotalOffTargets', width: '', group: ColumnGroup.CurrentData },
    { icon: 'attack.png', name: 'TotalAttacks', width: '', group: ColumnGroup.CurrentData },
    { icon: 'dangerous-attack.png', name: 'TotalDangerousAttacks', width: '', group: ColumnGroup.CurrentData },
    { icon: 'corner.png', name: 'TotalCorners', width: '', group: ColumnGroup.CurrentData },
    { icon: 'possession.png', name: 'TotalPossessions', width: '', group: ColumnGroup.CurrentData },
    { icon: 'yellow-card.png', name: 'TotalYellowCards', width: '', group: ColumnGroup.CurrentData },
    { icon: 'red-card.png', name: 'TotalRedCards', width: '', group: ColumnGroup.CurrentData },
    { icon: 'graph-1.png', name: 'TotalGraphs1', width: '', group: ColumnGroup.CurrentData },
    { icon: 'graph-2.png', name: 'TotalGraphs2', width: '', group: ColumnGroup.CurrentData },
  ];

  columns = [
    {
      group: ColumnGroup.CurrentData,
      columns: this.currentData
    },
    {
      group: ColumnGroup.PrevData,
      width: '300px',
      headerText: 'Previous 10 minutes',
      columns: this.prevData
    },
    {
      group: ColumnGroup.StatisticsData,
      width: '200px',
      columns: [
        { icon: '', name: '', width: '', group: ColumnGroup.StatisticsData },
      ],
    },
    {
      group: ColumnGroup.AlertData,
      width: '40px',
      columns: [
        { icon: 'alert-header.png', name: '', width: '', group: ColumnGroup.AlertData },
      ]
    },
    {
      group: ColumnGroup.DeleteData,
      width: '40px',
      columns: [
        { icon: 'trash-header.png', name: '', width: '', group: ColumnGroup.DeleteData },
      ]
    }
  ];

  data = [];
  showLowCount = 0;

  constructor() {
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
    console.log(this.data);
  }

  ngOnInit(): void {
  }

  deleteRow(index: number) {
    this.data.splice(index, 1);
  }

  addMatch(row: any, index: number) {
    row.matched = !row.matched;
  }

  isArray(obj: any) {
    return Array.isArray(obj);
  }

  onSubmit() {
    const searchText = this.searchForm.get('searchText')?.value;
    this.showLowCount = 0;
    for (let i = 0, len = this.data.length; i < len; i++) {
      if (JSON.stringify(this.data[i]).indexOf(searchText) < 0) {
        // @ts-ignore
        this.data[i].show = false;
      } else {
        // @ts-ignore
        this.data[i].show = true;
        this.showLowCount++;
      }
    }
    if (this.showLowCount === 0) {
      this.showLowCount = -1;
    }
  }
}
