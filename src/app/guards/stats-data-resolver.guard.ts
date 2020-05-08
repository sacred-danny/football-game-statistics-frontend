import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { StatisticsService } from '../core/services/statistics.service';

@Injectable({
  providedIn: 'root'
})
export class StatsDataResolverGuard implements CanActivate {

  constructor(
    private statisticsService: StatisticsService
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise(async resolve => {
      await this.statisticsService.getLastOneStat();
      resolve(true);
    });
  }

}
