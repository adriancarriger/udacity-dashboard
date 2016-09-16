import { Routes } from '@angular/router';

import { homeRoutes } from './home/index';
import { geospacialRoutes } from './geospacial/index';
import { analyticsRoutes } from './analytics/index';
import { keyMetricsRoutes } from './key-metrics/index';

export const routes: Routes = [
  ...homeRoutes,
  ...geospacialRoutes,
  ...analyticsRoutes,
  ...keyMetricsRoutes
];
