import {ModuleWithProviders} from '@angular/core';
import {RouterModule} from '@angular/router';

import {FullTripComponent} from './fulltrip/fulltrip.component';


export const  routing : ModuleWithProviders = RouterModule.forChild([
    {path : 'fulltrip/:tripid', component : FullTripComponent}
])