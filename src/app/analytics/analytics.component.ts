import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApiService } from '../shared/api/api.service';

@Component({
  selector: 'app-analytics',
  templateUrl: 'analytics.component.html',
  styleUrls: ['analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
  public termSearch: string = '';
  public statusFilter: string = 'all';
  public typeFilter: string = 'all';
  public readableQueries: string;
  public filteredMeta = {count: 0};
  public sortBy: string = 'opened';
  public desc = true;
  public currentStatus = 'all';
  constructor(
    public apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router) { }

  public ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['status'] === 'Open') {
        this.currentStatus = 'Open';
      }
    });
  }

  public updateSort(sortBy): void {
    let timeSorts = ['opened', 'closed'];
    if (this.sortBy !== sortBy) {
      this.sortBy = sortBy;
      if (timeSorts.indexOf( sortBy ) !== -1) {
        this.desc = true;
      } else {
        this.desc = false;
      }
    } else {
      this.desc = !this.desc;
    }
  }

  public arrowDesc(sortBy, numeric: boolean): boolean {
    if (this.sortBy === sortBy) {
      // Return current
      return this.desc;
    } else {
      // Return default
      if (numeric) {
        return true;
      } else {
        return false;
      }
    }
  }

}

