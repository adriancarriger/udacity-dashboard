import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { AnalyticsComponent } from './analytics.component';
import { FilterPipe } from './filter/index';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [
    AnalyticsComponent,
    FilterPipe
  ],
  exports: [AnalyticsComponent]
})

export class AnalyticsModule { }
