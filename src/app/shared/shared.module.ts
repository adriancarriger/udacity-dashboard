import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';

import { NavbarComponent } from './navbar/index';
import { CroppedImageComponent } from './cropped-image/index';
import { ApiService } from './api/api.service';
import { firebaseConfig } from './firebase-config';
import { SimpleChartsModule } from '../charts/charts.module';
import { LogoComponent } from './logo/logo.component';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AngularFireModule.initializeApp(firebaseConfig),
    SimpleChartsModule
  ],
  declarations: [
    NavbarComponent,
    CroppedImageComponent,
    LogoComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SimpleChartsModule,
    NavbarComponent,
    LogoComponent,
    CroppedImageComponent,
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        ApiService
      ]
    };
  }
}
