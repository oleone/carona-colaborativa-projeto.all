import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'dashboard', loadChildren: './home/home.module#HomeModule' },
  // { path: 'map', loadChildren: './map/map.module#HomeModule' },
  // { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
  // { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: '404', loadChildren: './not-found/not-found.module#NotFoundModule' },
  { path: '**', redirectTo: '404', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(APP_ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
