import { Component, Input, OnInit } from '@angular/core';
import { StatisticsService} from '../../core/services/statistics.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  @Input() title: any;

  constructor(private statisticsService: StatisticsService) {
  }

  ngOnInit(): void {
  }

  visibleSparkLine() {
    this.statisticsService.activeIndex = parseInt(this.title.replace(this.statisticsService.titlePrefix, ''), 10) - 1;
    this.statisticsService.status[this.statisticsService.activeIndex].showSparkLine =
      !this.statisticsService.status[this.statisticsService.activeIndex].showSparkLine;
  }
}
