import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core/core.module';

import { MapRoutingModule } from './map.routing.module';
import { MapComponent } from './map.component';

@NgModule({
  imports: [
    CommonModule,
    MapRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDpYVG9Wn4I2YFHMp62HYeH9SBkGG_Q0nY'
    })
  ],
  declarations: [MapComponent]
})
export class MapModule { }
