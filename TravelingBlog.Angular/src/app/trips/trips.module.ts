import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TriplistComponent } from './triplist/triplist.component';
import { TripService } from './trip.service';
import { SharedModule } from '../shared/modules/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { routing } from './trips.routing';

@NgModule({
  declarations: [TriplistComponent],
  imports: [
    CommonModule,
    SharedModule,
    routing,
    NgxPaginationModule
  ],
  exports:[TriplistComponent],
  providers:[TripService]
})
export class TripsModule { }