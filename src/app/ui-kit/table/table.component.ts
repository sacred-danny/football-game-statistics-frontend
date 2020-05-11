import { AfterViewInit, Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StatisticsService } from '../../core/services/statistics.service';
import { LineChartComponent} from '../line-chart/line-chart.component';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() statisticsIndex: any;
  @ViewChild(MatMenuTrigger) lineChart: MatMenuTrigger | undefined;

  searchForm = new FormGroup({
    searchText: new FormControl(''),
  });

  data = [];
  showLowCount = 0;

  constructor(public statisticsService: StatisticsService) {
  }

  ngOnInit(): void {
  }

  deleteRow(index: number) {
    this.statisticsService.stats[this.statisticsIndex].data.splice(index, 1);
  }

  addMatch(row: any, index: number) {
    row.matched = !row.matched;
  }

  isArray(obj: any) {
    return Array.isArray(obj);
  }

  onSubmit(event: any) {
    this.statisticsService.stats[this.statisticsIndex].searchText = this.searchForm.get('searchText')?.value;
    if (event.key === 'Enter') {
      this.statisticsService.allQuickFilter(this.statisticsIndex);
    }
  }

  drawGraph(event: any, value: any) {
  }
}
