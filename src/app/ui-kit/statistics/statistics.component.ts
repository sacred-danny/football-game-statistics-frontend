import { Component, Input, OnInit } from '@angular/core';
import { StatisticsService } from '../../core/services/statistics.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  @Input() title: any;
  @Input() background: any;
  @Input() statisticsIndex: any;

  constructor(private statisticsService: StatisticsService) {
  }

  ngOnInit(): void {
  }
}
