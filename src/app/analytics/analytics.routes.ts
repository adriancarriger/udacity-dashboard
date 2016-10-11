import { Route } from '@angular/router';
import { AnalyticsComponent } from './analytics.component';

export const analyticsRoutes: Route[] = [
  {
    path: 'data-view',
    data: {
      name: 'Data view',
      icon: 'ion-arrow-graph-up-right'
    },
    component: AnalyticsComponent
  }
];
