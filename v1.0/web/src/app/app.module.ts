import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatPaginatorModule,
  MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule,
  MatDialogModule, MatGridListModule, MatIconModule, MatInputModule,
  MatListModule, MatMenuModule, MatProgressBarModule, MatProgressSpinnerModule,
  MatRadioModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSortModule,
  MatSlideToggleModule, MatSnackBarModule, MatTableModule, MatTabsModule, MatToolbarModule,
  MatTooltipModule, MatFormFieldModule, MatExpansionModule, MatStepperModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FullLayoutComponent } from './layout/full-layout/full-layout.component';
import { SimpleLayoutComponent } from './layout/simple-layout/simple-layout.component';
import { NavbarComponent } from './layout/components/navbar/navbar.component';
import { AppRoutingModule } from './app.routing';
import { MapComponent } from './map/map.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FullLayoutComponent,
    SimpleLayoutComponent,
    NavbarComponent,
    MapComponent,
    LoginComponent,
    NotFoundComponent,
    HomeComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatPaginatorModule,
    MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule,
    MatDialogModule, MatGridListModule, MatIconModule, MatInputModule,
    MatListModule, MatMenuModule, MatProgressBarModule, MatProgressSpinnerModule,
    MatRadioModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSortModule,
    MatSlideToggleModule, MatSnackBarModule, MatTableModule, MatTabsModule, MatToolbarModule,
    MatTooltipModule, MatFormFieldModule, MatExpansionModule, MatStepperModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
