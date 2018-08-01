import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RootTemplateComponent } from './pages/root-template/root-template.component';
import {DashboardComponent} from "./pages/doctor/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: '',
    component: RootTemplateComponent,
    children: [
      {
        path: '',
        redirectTo: 'doctor/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'doctor/dashboard',
        component: DashboardComponent
      },
      {
        path: '**',
        redirectTo: 'doctor/dashboard',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
