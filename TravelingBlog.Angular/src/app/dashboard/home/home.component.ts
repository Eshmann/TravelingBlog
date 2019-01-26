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
  topTrips: TripDetails[];
  disabled: boolean;

  constructor(private dashboardService: DashboardService, private tripservice:
    TripserviceService) {

      this.homeDetails = new HomeDetails();
    }

  disableAll() {
    this.disabled = true;
  }

  ngOnInit() {

    this.dashboardService.getHomeDetails()
      .subscribe((homeDetails: HomeDetails) => {
        this.homeDetails = homeDetails;
        console.log(this.homeDetails)
        if(homeDetails.pictureUrl)
          this.homeDetails.pictureUrl = 'https://travelpictures.blob.core.windows.net' + this.homeDetails.pictureUrl;
      },
        error => {
          // this.notificationService.printErrorMessage(error);
        });
        this.getTopTrips();
  }
  getTopTrips() {
    this.tripservice.getTopTrips().subscribe(res => {
      this.topTrips = [...res];
      console.log(res);
    });
  }
}
