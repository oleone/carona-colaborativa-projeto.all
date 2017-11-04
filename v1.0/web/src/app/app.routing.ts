import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimpleLayoutComponent } from './layout/simple-layout.component';
import { FullLayoutComponent } from './layout/full-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout.component';
import { Error404Component } from './error/error-404/error-404.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'login', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'error', component: Error404Component },
  { path: '**', redirectTo: 'error', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(APP_ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
