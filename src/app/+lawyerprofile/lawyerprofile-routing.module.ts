import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LawyerProfileComponent } from './lawyerprofile.component';

const routes: Routes = [{
  path: '',
  component: LawyerProfileComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LawyerProfileRoutingModule { }
