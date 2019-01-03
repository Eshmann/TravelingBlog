import {ModuleWithProviders} from '@angular/core';
import {RouterModule} from '@angular/router';

import { TriplistComponent } from './triplist/triplist.component';

export const  routing : ModuleWithProviders = RouterModule.forChild([
    {path : 'triplist', component : TriplistComponent}
])