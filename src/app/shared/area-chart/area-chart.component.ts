import { Component } from '@angular/core';

@Component({
  selector: 'app-area-chart',
  templateUrl: 'area-chart.component.html',
  styleUrls: ['area-chart.component.scss']
})
export class AreaChartComponent {
  public lineChartData: Array<any> = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public chartType: string = 'line';
}
