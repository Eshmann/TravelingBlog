import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/modules/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home.component';
import { BestTripService } from './services/bestTrip.service';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [HomeComponent],
  exports: [],
  providers: [BestTripService]
})
export class HomeModule { }