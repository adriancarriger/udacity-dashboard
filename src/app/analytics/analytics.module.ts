import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { AnalyticsComponent } from './analytics.component';
import { FilterPipe } from './filter/index';
import { SortPipe } from './sort/index';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [
    AnalyticsComponent,
    FilterPipe,
    SortPipe
  ],
  exports: [AnalyticsComponent]
})

export class AnalyticsModule { }
