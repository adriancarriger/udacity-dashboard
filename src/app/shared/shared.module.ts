import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { NavbarComponent } from './navbar/index';
import { CroppedImageComponent } from './cropped-image/index';
import { ApiService } from './api/api.service';
import { firebaseConfig } from './firebase-config';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AngularFireModule.initializeApp(firebaseConfig),
    ChartsModule
  ],
  declarations: [
    NavbarComponent,
    CroppedImageComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NavbarComponent,
    CroppedImageComponent,
    ChartsModule
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
