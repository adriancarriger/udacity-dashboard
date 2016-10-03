import { Component } from '@angular/core';

import { ApiService } from '../shared/api/api.service';

@Component({
  selector: 'app-analytics',
  templateUrl: 'analytics.component.html',
  styleUrls: ['analytics.component.scss']
})
export class AnalyticsComponent {
  public termSearch: string = '';
  public statusFilter: string = 'all';
  public typeFilter: string = 'all';
  public readableQueries: string;
  public filteredMeta = {count: 0};
  public sortBy: string = 'opened';
  public desc = true;
  constructor(public apiService: ApiService) { }
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
}
