import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PageComponent} from './pages/pages.module';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: ':mainbar',
    component: PageComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
