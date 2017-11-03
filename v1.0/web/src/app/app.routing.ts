import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimpleLayoutComponent } from './layout/simple-layout.component';
import { FullLayoutComponent } from './layout/full-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  {
    path: 'signup',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './signup/signup.module#SignupModule'
      }
    ]
  },
  {
    path: 'login',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './login/login.module#LoginModule'
      }
    ]
  },
  // { path: 'login', loadChildren: './login/login.module#LoginModule' },
  // { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  // { path: 'map', loadChildren: './map/map.module#MapModule' },
  { path: '404', loadChildren: './not-found/not-found.module#NotFoundModule' },
  { path: '**', redirectTo: '404', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(APP_ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
