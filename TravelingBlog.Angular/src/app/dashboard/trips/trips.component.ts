import { Component, OnInit } from '@angular/core';

import { TripDetails } from '../models/trip.details.interface';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss'],
  providers: [DashboardService]//
})

export class TripsComponent implements OnInit {

  trips: TripDetails[];
  trip: TripDetails = new TripDetails();
  tableMode: boolean = true;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.loadTrips();
  }

  loadTrips()
  {
    this.dashboardService.getTrips()
    .subscribe((trips: TripDetails[]) => {
      this.trips = trips;
    },
      error => {
        //this.notificationService.printErrorMessage(error);
      });
  }

  save(){
    if(this.trip.id == null)
    {
      this.dashboardService.createTrip(this.trip).subscribe(data => this.loadTrips());
      
    }
    else
    {
      this.dashboardService.updateTrip(this.trip).subscribe(data => this.loadTrips())
    }
    this.cancel();
  }

  editTrip(trip: TripDetails)
  {
    this.trip=trip;
  }

  cancel()
  {
    this.trip = new TripDetails();
    this.tableMode = true;
  }

  delete(trip: TripDetails)
  {
    var r = confirm("Are you sure?");
    if(r==true)
    {
      this.dashboardService.deleteTrip(trip.id).subscribe(data => this.loadTrips());
    }
  }

  add()
  {
    this.cancel();
    this.tableMode = false;
  }

}
