import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TripEditComponent } from './trip/trip.component'

import { AuthGuard } from '../auth.guard';

export const routing: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'edit',
    runGuardsAndResolvers:'always',
    canActivate: [AuthGuard],
    children: [
      { 
        path : 'trip/:id',
        component: TripEditComponent,
      }
    ]
  }
]);
