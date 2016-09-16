import { Route } from '@angular/router';
import { AnalyticsComponent } from './analytics.component';

export const analyticsRoutes: Route[] = [
  {
    path: 'analytics',
    data: {
      name: 'Analytics',
      icon: 'ion-arrow-graph-up-right'
    },
    component: AnalyticsComponent
  }
];
