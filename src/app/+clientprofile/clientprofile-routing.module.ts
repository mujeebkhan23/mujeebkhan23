import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientProfileComponent } from './clientprofile.component';

const routes: Routes = [{
  path: '',
  component: ClientProfileComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientProfileRoutingModule { }
