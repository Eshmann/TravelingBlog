import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/modules/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { routing } from './edit.routing';

import { AuthGuard } from '../auth.guard';

import { TripEditComponent } from './trip/trip.component';
import { EditService } from './services/edit.services'


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    routing,
    SharedModule
  ],
  declarations: [TripEditComponent],
  exports: [],
  providers: [AuthGuard, EditService]
})
export class EditModule { }
