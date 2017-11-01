import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found.component';
import { NotFoundRoutingModule } from './not-found.routing.module';

@NgModule({
  imports: [
    CommonModule,
    NotFoundRoutingModule
  ],
  exports: [RouterModule],
  declarations: [NotFoundComponent]
})
export class NotFoundModule { }
