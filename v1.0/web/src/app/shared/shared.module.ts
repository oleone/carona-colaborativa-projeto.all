import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatComponentsModule } from './mat-component/mat-components.module';

@NgModule({
  imports: [
    CommonModule,
    MatComponentsModule
  ],
  exports: [
    MatComponentsModule
  ],
  declarations: []
})
export class SharedModule { }
