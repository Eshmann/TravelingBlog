import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserInfoService } from '../services/userinfo.services';
import { UserInfo } from '../models/userinfo.interface';
import { TripDetails } from '../../dashboard/models/trip.details.interface';
import { SubscriberDetails } from '../../dashboard/models/subsciber.details.interface';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss']
})
export class UserInfoComponent implements OnInit {

  id: string;
  userInfo: UserInfo;
  trips: TripDetails[] = [];
  subscribe:boolean=true;
  subscription:string[];
  subscriberDetails:SubscriberDetails[];
  logged:boolean;

  constructor(private userInfoService: UserInfoService, private router: Router, activeRoute: ActivatedRoute) {
    this.id = router.url.toString();
    let s : string[];
    s = this.id.split('/');
    this.id=s[s.length-1];

    var s2 = JSON.parse(localStorage.getItem('subs'));
    this.subscribe=true;
    this.logged=false;
    if(s2!=null)
    {
      for(var i=0;i<s2.length;i++)
      {
        if(s2[i].toString()==this.id)
        {
          this.subscribe=false;
          break;
        }
      }
    }

    var token = localStorage.getItem('auth_token');
    if(token!=null)
    {
      this.logged=true;
    }

  }

  ngOnInit() {
    //console.log(this.id);
    this.loadUserInfo(Number.parseInt(this.id));
    window.scrollTo(0,0);
    if(this.logged==true)
    {
      this.userInfoService.getSubs().subscribe((data: SubscriberDetails[])=> {
        this.subscriberDetails = data;
        var s2=[];
        for(var i=0;i<data.length;i++)
        {
          s2.push(data[i].subcriberId);
        }
        localStorage.setItem('subs',JSON.stringify(s2));
      })
    }
  }

  loadUserInfo(id:number)
  {
    this.userInfoService.getUserInfo(id).subscribe((data: UserInfo) => {
      this.userInfo = data;
  });
  }

  loadTrips()
  {
    this.userInfoService.getTrips(Number.parseInt(this.id))
    .subscribe((trips: TripDetails[]) => {
      this.trips = trips;
    });
  }

  subscribeTo()
  {
    this.userInfoService.subscribeTo(this.id)
    .subscribe((local:boolean)=>
    {
        if(local)
        {       
          var s = JSON.parse(localStorage.getItem('subs'));
          var s2 = [];
          if(s!=null)
          {
            for(var i=0;i<s.length;i++)
            {
              s2.push(s[i]);
            }
          }
          s2.push(Number.parseInt(this.id));
          var q = {
            firstName:this.userInfo.firstName,
            lastName:this.userInfo.lastName,
            subcriberId:Number.parseInt(this.id),
            userInfoId:-1};
          this.subscriberDetails.push(q);

          localStorage.removeItem('subs');
          localStorage.setItem('subs',JSON.stringify(s2));
          this.subscribe=false;
        }
    },
    error => {
      //this.notificationService.printErrorMessage(error);
    });
  }

  unSubscribeFrom()
  {
    this.userInfoService.unsubscribeFrom(this.id)
    .subscribe((local:boolean)=>
    {
      if(local)
      {
        var s = JSON.parse(localStorage.getItem('subs'));
        var s2 =[];
        var s3 =[];

        for(var i=0;i<s.length;i++)
        {
          if(s[i].toString()!=this.id)
          {
            var q = {
              firstName:this.subscriberDetails[i].firstName,
              lastName:this.subscriberDetails[i].lastName,
              subcriberId:Number.parseInt(s[i]),
              userInfoId:-1};
            
            s3.push(q);

            s2.push(s[i]);
          }
        }
        localStorage.removeItem('subs');
        localStorage.setItem('subs',JSON.stringify(s2));
        this.subscriberDetails=s3;
        this.subscribe=true;
      }
    },
    error => {
      //this.notificationService.printErrorMessage(error);
    });
  }

}
