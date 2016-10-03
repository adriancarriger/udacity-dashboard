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
  constructor(public apiService: ApiService) { }
}
