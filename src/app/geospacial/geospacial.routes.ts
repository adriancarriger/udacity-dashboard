import { Route } from '@angular/router';
import { GeospacialComponent } from './geospacial.component';

export const geospacialRoutes: Route[] = [
  {
    path: 'geospacial',
    data: {
      name: 'Geospacial',
      icon: 'ion-ios-world-outline'
    },
    component: GeospacialComponent
  }
];
