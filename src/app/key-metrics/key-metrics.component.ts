import { Component } from '@angular/core';

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

  public pieChartLabels:string[] = ['Scranton', 'Akron', 'Albany', 'Branch-4', 'Branch-5', 'Branch-6', 'Branch-7'];
  public pieChartData:number[] = [300, 500, 200, 123, 345, 225, 234];
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
  
  constructor() { }

  ngOnInit() {
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

  

  
}
