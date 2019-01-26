import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/modules/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { routing } from './search.rooting';

import { SearchComponent } from './search/search.component';
import { SearchService } from './services/search.services';
import { NgxPaginationModule } from 'ngx-pagination';
import { FullTripModule } from '../fulltrip/fulltrip.module';

import { TripsModule } from '../trips/trips.module';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    routing,
    SharedModule,
    NgxPaginationModule,
    FullTripModule,
    TripsModule,
  ],
  declarations: [SearchComponent],
  exports: [SearchComponent],
  providers: [SearchService]
})
export class SearchModule { }