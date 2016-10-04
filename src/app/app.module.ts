import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MomentModule } from 'angular2-moment';

import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { SharedModule } from './shared/shared.module';
import { GeospacialModule } from './geospacial/geospacial.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { KeyMetricsModule } from './key-metrics/key-metrics.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    SharedModule.forRoot(),
    GeospacialModule,
    AnalyticsModule,
    KeyMetricsModule,
    MomentModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
