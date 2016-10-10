import { Component, OnInit, OnChanges, Input, ViewChild } from '@angular/core';
import * as moment from 'moment';

import { ColorsService } from '../colors/colors.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, OnChanges {
  @Input('data') dataInput;
  @Input('datasets') datasetsInput;
  @Input('labels') labelsInput;
  @Input() legend;
  @Input() chartType: string;
  @ViewChild('chart') chart;
  public datasets;
  public data;
  public labels;
  public colors;
  public showChart = false;
  public options: any = {
    animation: {
      duration: 700
    }
  };
  public tempHeight: string;
  private resetOnNextChange = false;
  private lastReset: number;
  private dataKey: string;

  constructor(public colorsService: ColorsService) { }

  ngOnInit() {
    this.colors = this.colorsService.get( this.chartType );
    // Remove animation after inital load
    setTimeout( () => {
      this.options.animation.duration = 0;
      this.resetOnNextChange = true;
    }, 700);
    // Pie chart legend positioning
    if (this.chartType === 'pie') {
      this.options.legend = {
        position: 'right'
      };
    }
  }

  ngOnChanges(changes) {
    
    // Remove the chart if passed null data
    if (!('labelsInput' in changes) || changes.labelsInput.currentValue === null) {
      this.removeChart();
      return;
    }
    // Reset chart if labels change
    if (changes.labelsInput.previousValue === null
      || !this.arraysEqual(changes.labelsInput.currentValue, changes.labelsInput.previousValue)
      || this.resetOnNextChange) {
      this.resetChart();
    } else {
    // If no reset, then show with latest data
      this.updateChart();
    }
  }

  private resetChart(): void {
    // Throttle resets
    if (this.lastReset !== undefined
      && moment().valueOf() - this.lastReset < 500) {
        return;
    }
    this.lastReset = moment().valueOf();
    // Remove chart from DOM
    this.removeChart();
    setTimeout( () => {
      // Add to DOM on next change cycle
      this.updateChart();
      this.resetOnNextChange = false;
    }, 0);
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

  /**
   * This passes data from the data inputs types to
   * the chart
   */
  private updateChart(): void {
    this.data = this.dataInput;
    this.datasets = this.datasetsInput;
    this.labels = this.labelsInput;
    this.showChart = true;
  }

  private removeChart(): void {
    if (this.chart !== undefined) {
      this.tempHeight = this.chart.nativeElement.clientHeight + 'px';
    } else {
      this.tempHeight = '500px';
    }
    this.showChart = false;
  }

}

