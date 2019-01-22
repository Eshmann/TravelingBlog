import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/modules/shared.module';

import { routing } from './dashboard.routing';
import { RootComponent } from './root/root.component';
import { HomeComponent } from './home/home.component';
import { DashboardService } from './services/dashboard.service';

import { AuthGuard } from '../auth.guard';
import { SettingsComponent } from './settings/settings.component';
import { TripsComponent } from './trips/trips.component';
import { TripService } from '../trips/trip.service';
import { TripserviceService } from './services/tripservice.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    SharedModule
  ],
  declarations: [RootComponent, HomeComponent, SettingsComponent, TripsComponent],
  exports: [],
  providers: [AuthGuard, DashboardService, TripserviceService]
})
export class DashboardModule { }
