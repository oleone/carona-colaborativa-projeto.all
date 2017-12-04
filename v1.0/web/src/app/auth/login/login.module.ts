import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import {
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
  MatStepperModule
} from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

export const firebaseConfig = {
  apiKey: 'AIzaSyDJkfx-JMHj4DwWzYZ3LVo3HEduujdxkFk',
  authDomain: 'pontuall-e350d.firebaseapp.com',
  databaseURL: 'https://pontuall-e350d.firebaseio.com',
  projectId: 'pontuall-e350d',
  storageBucket: '',
  messagingSenderId: '563062683709'
};

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
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
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    AngularFireModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [LoginComponent],
  providers: [ AuthService, AngularFireAuth ]
})
export class LoginModule {}
