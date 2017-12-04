import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// tslint:disable-next-line:max-line-length
import { MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatPaginatorModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSortModule, MatSlideToggleModule, MatSnackBarModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatFormFieldModule, MatExpansionModule, MatStepperModule } from '@angular/material';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { LayoutModule, firebaseConfig } from '../layout/layout.module';
import { AgmCoreModule } from '@agm/core';
import { ChartsModule } from 'ng2-charts';
import { AuthService } from '../services/auth.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LayoutModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDpYVG9Wn4I2YFHMp62HYeH9SBkGG_Q0nY'
    }),
    ChartsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatPaginatorModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSortModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatStepperModule,
    AngularFireModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [DashboardComponent],
  providers: [ AuthService ]
})
export class DashboardModule {}
