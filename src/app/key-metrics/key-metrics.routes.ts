import { Route } from '@angular/router';
import { KeyMetricsComponent } from './key-metrics.component';

export const keyMetricsRoutes: Route[] = [
  {
    path: 'key-metrics',
    data: {
      name: 'Key metrics',
      icon: 'ion-ios-analytics-outline'
    },
    component: KeyMetricsComponent
  }
];
