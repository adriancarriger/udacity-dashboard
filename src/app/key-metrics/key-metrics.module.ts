import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { KeyMetricsComponent } from './key-metrics.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [
    KeyMetricsComponent
  ],
  exports: [KeyMetricsComponent]
})

export class KeyMetricsModule { }
