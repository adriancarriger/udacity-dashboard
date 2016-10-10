import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { ChartComponent } from './chart/chart.component';
import { ColorsService } from './colors/colors.service';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [
    CommonModule,
    ChartsModule
  ],
  declarations: [
    ChartComponent
  ],
  exports: [
    ChartComponent,
    ChartsModule
  ]
})
export class SimpleChartsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SimpleChartsModule,
      providers: [
        ColorsService
      ]
    };
  }
}
