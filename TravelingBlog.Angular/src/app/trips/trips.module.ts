import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TriplistComponent } from './triplist/triplist.component';
import { TripService } from './trip.service';
import { SharedModule } from '../shared/modules/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { FullTripModule } from '../fulltrip/fulltrip.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RatingModule } from 'ngx-bootstrap';
import {AdminModule} from '../admin/admin.module';
import {DashboardModule} from '../dashboard/dashboard.module'
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [TriplistComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgxPaginationModule,
    FullTripModule,
    RatingModule,
    NgbModule,
    RatingModule,
    AdminModule,
    DashboardModule,
    RouterModule
  ],
  exports:[TriplistComponent],
  providers:[TripService], 
})
export class TripsModule { }