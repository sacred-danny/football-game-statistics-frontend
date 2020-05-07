import { AfterViewInit, Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StatisticsService } from '../../core/services/statistics.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() statisticsIndex: any;

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
    this.statisticsService.status[this.statisticsIndex].data.splice(index, 1);
  }

  addMatch(row: any, index: number) {
    row.matched = !row.matched;
  }

  isArray(obj: any) {
    return Array.isArray(obj);
  }

  onSubmit() {
    const searchText = this.searchForm.get('searchText')?.value;
    // @ts-ignore
    this.statisticsService.status[this.statisticsIndex].showDataCount = 0;
    for (let i = 0, len = this.statisticsService.status[this.statisticsIndex].data.length; i < len; i++) {
      if (JSON.stringify(this.statisticsService.status[this.statisticsIndex].data[i]).indexOf(searchText) < 0) {
        // @ts-ignore
        this.statisticsService.status[this.statisticsIndex].data[i].show = false;
      } else {
        // @ts-ignore
        this.statisticsService.status[this.statisticsIndex].data[i].show = true;
        this.statisticsService.status[this.statisticsIndex].showDataCount++;
      }
    }

    if (this.statisticsService.status[this.statisticsIndex].showDataCount === 0) {
      this.statisticsService.status[this.statisticsIndex].showDataCount = -1;
    }
  }
}
