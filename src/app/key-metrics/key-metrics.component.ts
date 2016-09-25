import { Component } from '@angular/core';

@Component({
  selector: 'app-key-metrics',
  templateUrl: 'key-metrics.component.html',
  styleUrls: ['key-metrics.component.scss']
})
export class KeyMetricsComponent {
  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Customer A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Customer B'}
  ];
  public barChartData: Array<any> = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartColors:Array<any> = [];
  public barChartColors: Array<any>  = [];
  private colors = [
    'rgba(0, 157, 255,',
    'rgba(57, 255, 182,'
  ];
  
  constructor() { }

  ngOnInit() {
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
    }
  }

  

  
}
