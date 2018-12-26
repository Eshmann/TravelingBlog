import {ModuleWithProviders} from '@angular/core';
import {RouterModule} from '@angular/router';

import {SearchComponent} from './search/search.component';


export const  routing : ModuleWithProviders = RouterModule.forChild([
    {path : 'search', component : SearchComponent}
])
