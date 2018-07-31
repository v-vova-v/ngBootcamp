import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RootTemplateComponent } from './pages/root-template/root-template.component';

const routes: Routes = [
  { path: '',
    component: RootTemplateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
