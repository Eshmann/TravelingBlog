import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/modules/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { RatingModule } from 'ngx-bootstrap';

import { routing } from './fulltrip.rooting';

import { FullTripComponent } from './fulltrip/fulltrip.component';

import { FullTripService } from '../fulltrip/services/fulltrip.services';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    routing,
    SharedModule, 
    RatingModule
  ],
  declarations: [FullTripComponent],
  exports: [],
  providers: [FullTripService]
})
export class FullTripModule { }