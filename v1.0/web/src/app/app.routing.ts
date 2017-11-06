import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimpleLayoutComponent } from './layout/simple-layout.component';
import { FullLayoutComponent } from './layout/full-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout.component';
import { Error404Component } from './error/error-404/error-404.component';
import { LoadInicialComponent } from './layout/load-inicial/load-inicial.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // { path: '', component: LoadInicialComponent },
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'signup', loadChildren: './auth/signup/signup.module#SignupModule' },
  { path: 'forgot-password',
    loadChildren: './auth/forgot-password/forgot-password.module#ForgotPasswordModule'
  },
  { path: 'login', loadChildren: './auth/login/login.module#LoginModule' },
  { path: 'error', component: Error404Component },
  { path: '**', redirectTo: 'error', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(APP_ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
