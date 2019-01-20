import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TriplistComponent } from './triplist/triplist.component';
import { TripService } from './trip.service';
import { SharedModule } from '../shared/modules/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { routing } from './trips.routing';
import { FullTripModule } from '../fulltrip/fulltrip.module';
import {NgbRatingConfig, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RatingModule } from 'ngx-bootstrap';
import { AdminModule } from '../admin/admin.module';

@NgModule({
  declarations: [TriplistComponent],
  imports: [
    CommonModule,
    SharedModule,
    routing,
    NgxPaginationModule,
    FullTripModule,
    RatingModule,
    NgbModule,
    RatingModule,
    AdminModule
  ],
  exports:[TriplistComponent],
  providers:[TripService], 
})
export class TripsModule { }