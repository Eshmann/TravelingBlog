import { Component, OnInit } from '@angular/core';

import { HomeDetails } from '../models/home.details.interface';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homeDetails: HomeDetails;
  public disabled: boolean = false;

  constructor(private dashboardService: DashboardService) { }

  disableAll() {
    this.disabled = true;
  }

  ngOnInit() {

    this.dashboardService.getHomeDetails()
      .subscribe((homeDetails: HomeDetails) => {
        this.homeDetails = homeDetails;
      },
        error => {
          // this.notificationService.printErrorMessage(error);
        });

  }

}
