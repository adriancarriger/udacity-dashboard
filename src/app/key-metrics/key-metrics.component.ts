import { Component } from '@angular/core';

import { ApiService } from '../shared/api/api.service';

@Component({
  selector: 'app-key-metrics',
  templateUrl: 'key-metrics.component.html',
  styleUrls: ['key-metrics.component.scss']
})
export class KeyMetricsComponent {
  public lineChartData:Array<any> = [
    [65, 59, 80, 61, 56, 65, 70]
  ];
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Client'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Employee'}
  ];

  public showPieChart = true;
  public pieChartLabels:string[] = [];
  public pieChartData:number[] = [];
  public pieChartOptions:any = {
    legend: {
      position: 'right'
    }
  };
  private doughnutChartColors: any[] = []; 

  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartColors:Array<any> = [];
  public barChartColors: Array<any>  = [];
  private colors = [
    'rgba(0, 157, 255,',
    'rgba(57, 255, 182,',
    'rgba(0, 16, 255,',
    'rgba(0, 255, 24,',
    'rgba(0, 216, 255,',
    'rgba(99, 245, 255,',
    'rgba(255, 239, 0,'
  ];
  
  constructor(public apiService: ApiService) { }

  public ngOnInit(): void {
    this.setColors();
    this.getData();
  }

  private setColors(): void {
    let doughnutColors = [];
    for (let i = 0; i < this.colors.length; i++) {
      // Line chart
      let lineOpacity = ' 0.4)';
      this.lineChartColors.push({
        backgroundColor: this.colors[i] + lineOpacity,
        borderColor: this.colors[i] + lineOpacity,
        pointBackgroundColor: '#fff',
        pointBorderColor: this.colors[i] + ' 1)',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: this.colors[i] + lineOpacity
      });
      // Bar chart
      let barOpacity = ' 1)';
      this.barChartColors.push({
        backgroundColor: this.colors[i] + barOpacity,
        borderColor: this.colors[i] + barOpacity,
        pointBackgroundColor: this.colors[i] + barOpacity,
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: this.colors[i] + barOpacity
      });
      let doughnutOpacity = ' 0.7)';
      doughnutColors.push( this.colors[i] + doughnutOpacity );
    }
    this.doughnutChartColors.push({ backgroundColor: doughnutColors });
  }

  private getData(): void {
    this.apiService.branches.subscribe(branches => {
      let temp = {
        cities: [],
        clients: []
      }
      for (let i = 0; i < branches.length; i++) {
        if (branches[i].clients > 0) {
          temp.cities.push( branches[i].city );
          temp.clients.push( branches[i].clients );
        }
      }
      let resetNeeded = false;
      if (!this.arraysEqual(this.pieChartLabels, temp.cities)) {
        resetNeeded = true;
      }
      this.pieChartLabels = temp.cities;
      this.pieChartData = temp.clients;
      if (resetNeeded) {
        this.resetPieChart();
      }
    });
  }

  // http://stackoverflow.com/a/4025958/5357459
  private arraysEqual(arr1, arr2): boolean {
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (let i = arr1.length; i--;) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }

  private resetPieChart(): void {
    this.showPieChart = false;
    setTimeout( () => {
      this.showPieChart = true;
    }, 0);
  }
  
}
