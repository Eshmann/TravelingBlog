import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { SubscriberDetails } from '../models/subsciber.details.interface';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],

})
export class RootComponent implements OnInit {

  constructor(private dashboardService: DashboardService) { }
  subscriberDetails: SubscriberDetails[];

  ngOnInit() {
    this.dashboardService.getSubscriberDetails()
    .subscribe((subscriberDetails: SubscriberDetails[])=>{
      this.subscriberDetails=subscriberDetails;
      var a = [];
      for(var i=0;i<subscriberDetails.length;i++)
      {
        a.push(subscriberDetails[i].subcriberId);
      }
      localStorage.setItem('subs',JSON.stringify(a));     
    },
    error => {
      // this.notificationService.printErrorMessage(error);
    });
  }

}
