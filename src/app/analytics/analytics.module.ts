import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { AnalyticsComponent } from './analytics.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [
    AnalyticsComponent
  ],
  exports: [AnalyticsComponent]
})

export class AnalyticsModule { }
