import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { StatisticsService } from '../../core/services/statistics.service';

@Component({
  selector: 'app-stats-modal',
  templateUrl: './stats-modal.component.html',
  styleUrls: ['./stats-modal.component.scss']
})
export class StatsModalComponent implements OnInit {

  filterArray = ['true'];

  constructor(
    public dialogRef: MatDialogRef<StatsModalComponent>,
    public statisticsService: StatisticsService
  ) { }

  ngOnInit(): void {
  }

  onYesClick(): void {
    this.statisticsService.allStatsFilter(this.statisticsService.selectedStatsIndex);
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
