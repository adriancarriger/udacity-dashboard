import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { SharedModule } from '../shared/shared.module';
import { GeospacialComponent } from './geospacial.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyBE1Bb86PEGx-11LahjWCZS2cFOWMpNseI'
    })
  ],
  declarations: [
    GeospacialComponent
  ],
  exports: [GeospacialComponent]
})

export class GeospacialModule { }
