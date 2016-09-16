import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { GeospacialComponent } from './geospacial.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [
    GeospacialComponent
  ],
  exports: [GeospacialComponent]
})

export class GeospacialModule { }
