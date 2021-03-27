import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
    data: {
      title: 'Get Started',
    },
  },
  {
    path: 'app',
    //canActivate: [AuthGuard]
    data: {
      title: 'Get Started',
    },
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },
  {
    path: 'calendars',
    loadChildren: () =>
      import('./calendars/calendars.module').then((m) => m.CalendarsModule),
    data: {
      title: 'Calendars',
    },
  },

  {
    path: 'login',
    loadChildren: () =>
      import('./+login/login.module').then((m) => m.LoginModule),
    data: {
      customLayout: true,
    },
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./+register/register.module').then((m) => m.RegisterModule),
    data: {
      customLayout: true,
    },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
