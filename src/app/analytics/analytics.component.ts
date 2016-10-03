import { Component } from '@angular/core';

import { ApiService } from '../shared/api/api.service';

@Component({
  selector: 'app-analytics',
  templateUrl: 'analytics.component.html',
  styleUrls: ['analytics.component.scss']
})
export class AnalyticsComponent {
  constructor(public apiService: ApiService) { }
}
