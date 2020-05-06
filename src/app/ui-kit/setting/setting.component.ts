import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  @Input() title: any;

  constructor() { }

  ngOnInit(): void {
  }

}
