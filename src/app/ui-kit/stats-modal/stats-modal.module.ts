import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StatsModalComponent } from './stats-modal.component';
import { StatsFilterComponent } from './stats-filter/stats-filter.component';


@NgModule({
  declarations: [StatsModalComponent, StatsFilterComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule,
  ],
  // tslint:disable-next-line:max-line-length
  exports: [FormsModule, MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule, BrowserAnimationsModule, StatsFilterComponent]
})
export class StatsModalModule {
}
