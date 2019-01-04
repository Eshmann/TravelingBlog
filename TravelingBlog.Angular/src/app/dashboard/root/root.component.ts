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
      var s ="";
    for(var i=0;i<subscriberDetails.length-1;i++)
    {
      s+=subscriberDetails[i].subcriberId+"%";
    }
    if(subscriberDetails.length>0)
    {
      s+=subscriberDetails[subscriberDetails.length-1].subcriberId;
      localStorage.setItem('subs',s);
    }
    },
    error => {
      // this.notificationService.printErrorMessage(error);
    });
  }

}
