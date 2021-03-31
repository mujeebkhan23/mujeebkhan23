import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaseComponent } from './Case.component';


const routes: Routes = [{
  path: '',
  component: CaseComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaseRoutingModule { }
