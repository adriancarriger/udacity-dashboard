import { Component, OnInit } from '@angular/core';

import { ApiService } from '../shared/api/api.service';

@Component({
  selector: 'app-key-metrics',
  templateUrl: 'key-metrics.component.html',
  styleUrls: ['key-metrics.component.scss']
})
export class KeyMetricsComponent implements OnInit {

  // Pie chart
  public pieChartLabels: string[] = [];
  public pieChartData: number[] = [];

  constructor(public apiService: ApiService) { }

  public ngOnInit(): void {
    this.getData();
  }

  private getData(): void {
    // Branch data
    this.apiService.branches.subscribe(branches => {
      let temp = {
        cities: [],
        clients: []
      };
      for (let i = 0; i < branches.length; i++) {
        if (branches[i].clients > 0) {
          temp.cities.push( branches[i].city );
          temp.clients.push( branches[i].clients );
        }
      }
      this.pieChartLabels = temp.cities;
      this.pieChartData = temp.clients;
    });
  }

}
