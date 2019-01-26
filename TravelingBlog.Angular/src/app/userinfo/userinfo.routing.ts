import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UserInfoComponent } from './userinfo/userinfo.component';
import { AuthGuard } from '../auth.guard';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: 'user/:id',
    component: UserInfoComponent,
    canActivate:[AuthGuard]  
  }
]);
