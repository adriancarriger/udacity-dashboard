import { Routes } from '@angular/router';

import { keyMetricsRoutes } from './key-metrics/index';
import { geospacialRoutes } from './geospacial/index';
import { analyticsRoutes } from './analytics/index';

export const routes: Routes = [
  ...keyMetricsRoutes,
  ...geospacialRoutes,
  ...analyticsRoutes
];
