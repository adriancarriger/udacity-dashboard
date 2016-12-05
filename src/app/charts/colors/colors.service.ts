import { Injectable } from '@angular/core';

@Injectable()
export class ColorsService {

  // All colors
  private colorsInput = [
    'rgba(0, 157, 255,',
    'rgba(57, 255, 182,',
    'rgba(0, 16, 255,',
    'rgba(0, 255, 24,',
    'rgba(255, 0, 161,',
    'rgba(99, 245, 255,',
    'rgba(255, 239, 0,',
    'rgba(27, 60, 243,',
    'rgba(243, 67, 27,',
    'rgba(0, 216, 255,',
    'rgba(172, 249, 33,',
    'rgba(25, 71, 255,'
  ];
  private opacityInput = {
    bar: 1,
    line: 0.4,
    pie: 0.7
  };

  private colorsOutput = {
    bar: [],
    line: [],
    pie: []
  };
  private generated = false;

  public get(type: string) {
    if (!this.generated) { this.generateColors(); }
    return this.colorsOutput[type.toLowerCase()];
  }

  private generateColors(): void {
    let pieColors = [];
      for (let i = 0; i < this.colorsInput.length; i++) {
        // Line chart
        let lineOpacity = ' ' + this.opacityInput.line + ')';
        this.colorsOutput.line.push({
          backgroundColor: this.colorsInput[i] + lineOpacity,
          borderColor: this.colorsInput[i] + lineOpacity,
          pointBackgroundColor: '#fff',
          pointBorderColor: this.colorsInput[i] + ' 1)',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: this.colorsInput[i] + lineOpacity
        });
        // Bar chart
        let barOpacity = ' ' + this.opacityInput.bar + ')';
        this.colorsOutput.bar.push({
          backgroundColor: this.colorsInput[i] + barOpacity,
          borderColor: this.colorsInput[i] + barOpacity,
          pointBackgroundColor: this.colorsInput[i] + barOpacity,
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: this.colorsInput[i] + barOpacity
        });
        pieColors.push( this.colorsInput[i] + ' ' + this.opacityInput.pie + ')' );
      }
      this.colorsOutput.pie.push({ backgroundColor: pieColors });
  }

}
