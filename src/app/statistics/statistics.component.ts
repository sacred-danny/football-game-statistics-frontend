import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  rows = [{
    score: 10,
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
