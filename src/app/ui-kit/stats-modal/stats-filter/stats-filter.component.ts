import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { StatisticsService } from '../../../core/services/statistics.service';

@Component({
  selector: 'app-stats-filter',
  templateUrl: './stats-filter.component.html',
  styleUrls: ['./stats-filter.component.scss']
})
export class StatsFilterComponent implements OnInit {
  // tslint:disable-next-line:no-output-native
  @Input() index: any;

  value  = '';
  statType = '';
  filterType = '';
  andOrType = '';
  valueHome = '';
  valueAway = '';
  // isShow = true;

  andOrTypes = [
    {title: 'Please Select', value: ''},
    {title: 'And', value: '&&'},
    {title: 'Or', value: '||'},
  ];
  constructor(
    public statisticsService: StatisticsService
  ) { }

  ngOnInit(): void {
  }

  makeQuery() {
    if (this.statType === 'OriginalAllStats.Score') {
      this.value = '';
      this.filterType = '';
      if (this.valueHome === '' || this.valueAway === '' || this.andOrType === '') {
        return;
      }
      const filterQuery = this.andOrType + 'this.stats[statisticsIndex].data[i].' + this.statType + '==="' +
        (this.valueHome + '-' + this.valueAway) + '"';
      this.statisticsService.stats[this.statisticsService.selectedStatsIndex].statsFilterQuery[this.index] = filterQuery;
      console.log(this.statisticsService.stats[this.statisticsService.selectedStatsIndex].statsFilterQuery);
    }
    else {
      if (this.statType === '' || this.filterType === '' || this.value === '' || this.andOrType === '') {
        return;
      }
      const filterQuery = this.andOrType + 'this.stats[statisticsIndex].data[i].' + this.statType + this.filterType +
        this.value;
      this.statisticsService.stats[this.statisticsService.selectedStatsIndex].statsFilterQuery[this.index] = filterQuery;
      console.log(this.statisticsService.stats[this.statisticsService.selectedStatsIndex].statsFilterQuery);
    }
  }

  onPlus() {
    if (this.index < this.statisticsService.stats[this.statisticsService.selectedStatsIndex].statsFilterQuery.length) {
      return;
    }
    if (this.statType === 'OriginalAllStats.Score') {
      this.value = '';
      this.filterType = '';
      if (this.valueHome === '' || this.valueAway === '' || this.andOrType === '') {
        alert('Please Input type and value!');
        return;
      }
      const filterQuery = this.andOrType + 'this.stats[statisticsIndex].data[i].' + this.statType + '==="' +
        (this.valueHome + '-' + this.valueAway) + '"';
      this.statisticsService.stats[this.statisticsService.selectedStatsIndex].statsFilterQuery[this.index] = filterQuery;
      console.log(this.statisticsService.stats[this.statisticsService.selectedStatsIndex].statsFilterQuery);
    }
    else {
      if (this.statType === '' || this.filterType === '' || this.value === '' || this.andOrType === '') {
        alert('Please Input type and value!');
        return;
      }
      const filterQuery = this.andOrType + 'this.stats[statisticsIndex].data[i].' + this.statType + this.filterType +
        this.value;
      this.statisticsService.stats[this.statisticsService.selectedStatsIndex].statsFilterQuery[this.index] = filterQuery;
      console.log(this.statisticsService.stats[this.statisticsService.selectedStatsIndex].statsFilterQuery);
    }
  }

  onMinus() {
    this.statisticsService.stats[this.statisticsService.selectedStatsIndex].statsFilterQuery[this.index] = '';
    console.log(this.statisticsService.stats[this.statisticsService.selectedStatsIndex].statsFilterQuery);
  }
}
