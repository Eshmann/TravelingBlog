import { Component, OnInit } from '@angular/core';

import { HomeDetails } from '../models/home.details.interface';
import { DashboardService } from '../services/dashboard.service';
import { SubscriberDetails } from '../models/subsciber.details.interface';
import { TripserviceService } from '../services/tripservice.service';
import { TripDetails } from '../models/trip.details.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homeDetails: HomeDetails;
  topTrips:TripDetails[];

  constructor(private dashboardService: DashboardService, private tripservice:
    TripserviceService) { }

  ngOnInit() {

    this.dashboardService.getHomeDetails()
      .subscribe((homeDetails: HomeDetails) => {
        this.homeDetails = homeDetails;
      },
        error => {
          // this.notificationService.printErrorMessage(error);
        }); 
        this.getTopTrips();
  }
  getTopTrips(){
    this.tripservice.getTopTrips().subscribe(res=>{
      this.topTrips = [...res]; 
      console.log(res)
    })
  }
}
