import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

import { ApiService } from '../shared/api/api.service';

@Component({
  selector: 'app-key-metrics',
  templateUrl: 'key-metrics.component.html',
  styleUrls: ['key-metrics.component.scss']
})
export class KeyMetricsComponent implements OnInit {

  // Line chart
  public showLineChart: boolean = false;
  public lineChartColors: Array<any> = [];
  public lineChartOptions: any = {
    animation: {
      duration: 700
    }
  };

  // Bar chart
  public showBarChart: boolean = false;
  public barChartLabels: any[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public barChartData: any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Client'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Employee'}
  ];
  public barChartOptions: any = {
    animation: {
      duration: 700
    }
  };
  public barChartColors: Array<any> = [];

  // Pie chart
  public showPieChart = true;
  public pieChartLabels: string[] = [];
  public pieChartData: number[] = [];
  public pieChartOptions: any = {
    legend: {
      position: 'right'
    },
    animation: {
      duration: 700
    }
  };

  // All colors
  private colors = [
    'rgba(0, 157, 255,',
    'rgba(57, 255, 182,',
    'rgba(0, 16, 255,',
    'rgba(0, 255, 24,',
    'rgba(0, 216, 255,',
    'rgba(99, 245, 255,',
    'rgba(255, 239, 0,'
  ];

  private pieChartColors: any[] = [];
  private resetHistory = { };

  constructor(public apiService: ApiService) { }

  public ngOnInit(): void {
    this.setColors();
    this.getData();
  }

  private setColors(): void {
    let pieColors = [];
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
      let pieOpacity = ' 0.7)';
      pieColors.push( this.colors[i] + pieOpacity );
    }
    this.pieChartColors.push({ backgroundColor: pieColors });
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
      let resetNeeded = false;
      if (!this.arraysEqual(this.pieChartLabels, temp.cities)
        || this.pieChartOptions.animation.duration !== 0) {
        resetNeeded = true;
      }
      this.pieChartLabels = temp.cities;
      this.pieChartData = temp.clients;
      if (resetNeeded) {
        this.resetChart('Pie');
      }
    });
    // Sales data
    this.apiService.sales.subscribe(sales => this.resetChart('Line') );
    // Issues data
    this.apiService.issues.subscribe(sales => this.resetChart('Bar') );
  }

  // http://stackoverflow.com/a/4025958/5357459
  private arraysEqual(arr1, arr2): boolean {
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (let i = arr1.length; i--; ) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }

  private resetChart(name: string): void {
    if (this.resetHistory[name] !== undefined
      && moment().valueOf() - this.resetHistory[name] < 1000) {
        return;
    }
    if (this.resetHistory[name] !== undefined) {
      this[name.toLowerCase() + 'ChartOptions'].animation.duration = 0;
    }
    this.resetHistory[name] = moment().valueOf();
    this['show' + name + 'Chart'] = false;
    setTimeout( () => {
      this['show' + name + 'Chart']  = true;
    }, 0);
  }

}
