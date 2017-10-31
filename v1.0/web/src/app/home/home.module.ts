import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

const homeRoutes = [
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    HomeComponent,
    RouterModule.forChild(homeRoutes)
  ],
  exports: [RouterModule],
  declarations: [HomeComponent]
})
export class HomeModule { }
