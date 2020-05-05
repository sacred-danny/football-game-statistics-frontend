import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-match-content-row',
  templateUrl: './match-content-row.component.html',
  styleUrls: ['./match-content-row.component.scss']
})
export class MatchContentRowComponent implements OnInit {

  @Input() row;

  constructor() { }

  ngOnInit(): void {
  }

}
