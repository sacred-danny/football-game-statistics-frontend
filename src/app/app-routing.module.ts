import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { StatsDataResolverGuard } from './guards/stats-data-resolver.guard';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [StatsDataResolverGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
