import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

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

  ColumnGroup = ColumnGroup;

  prevDataColumns = [
    { icon: 'on-target.png', name: '', width: '', group: ColumnGroup.PrevData },
    { icon: 'off-target.png', name: '', width: '', group: ColumnGroup.PrevData },
    { icon: 'attack.png', name: '', width: '', group: ColumnGroup.PrevData },
    { icon: 'dangerous-attack.png', name: '', width: '', group: ColumnGroup.PrevData },
    { icon: 'football.png', name: '', width: '', group: ColumnGroup.PrevData },
    { icon: 'corner.png', name: '', width: '', group: ColumnGroup.PrevData },
  ];
  currentData = [
    { icon: 'time.png', name: '', width: '', group: ColumnGroup.CurrentData },
    { icon: 'football.png', name: '', width: '', group: ColumnGroup.CurrentData },
    { icon: '', name: '', width: '', isSearch: true, group: ColumnGroup.CurrentData },
    { icon: 'on-target.png', name: '', width: '', group: ColumnGroup.CurrentData },
    { icon: 'off-target.png', name: '', width: '', group: ColumnGroup.CurrentData },
    { icon: 'attack.png', name: '', width: '', group: ColumnGroup.CurrentData },
    { icon: 'dangerous-attack.png', name: '', width: '', group: ColumnGroup.CurrentData },
    { icon: 'corner.png', name: '', width: '', group: ColumnGroup.CurrentData },
    { icon: 'possession.png', name: '', width: '', group: ColumnGroup.CurrentData },
    { icon: 'yellow-card.png', name: '', width: '', group: ColumnGroup.CurrentData },
    { icon: 'red-card.png', name: '', width: '', group: ColumnGroup.CurrentData },
    { icon: 'graph-1.png', name: '', width: '', group: ColumnGroup.CurrentData },
    { icon: 'graph-2.png', name: '', width: '', group: ColumnGroup.CurrentData },
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
      columns: this.prevDataColumns
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

  data = [
    { matched: false },
    { matched: true },
    { matched: true },
    { matched: false },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  deleteRow(row: any, index: number) {
    this.data.splice(index, 1);
  }
}
