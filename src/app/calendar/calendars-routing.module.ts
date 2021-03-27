<<<<<<< HEAD:src/app/calendar/calendars-routing.module.ts
import { CalendarsComponent } from './calendars.component';
=======
>>>>>>> 9bfb5677bc4f99bb9ca9e7b172b47356f4954d2a:src/app/case/case-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaseComponent } from './case.component';

const routes: Routes = [
  {
    path: '',
<<<<<<< HEAD:src/app/calendar/calendars-routing.module.ts
    component: CalendarsComponent,
=======
    component: CaseComponent,
>>>>>>> 9bfb5677bc4f99bb9ca9e7b172b47356f4954d2a:src/app/case/case-routing.module.ts
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaseComponentModuleRouting{}
