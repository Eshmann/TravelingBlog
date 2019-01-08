import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserInfoService } from '../services/userinfo.services';
import { UserInfo } from '../models/userinfo.interface';
import { TripDetails } from '../../dashboard/models/trip.details.interface';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss']
})
export class UserInfoComponent implements OnInit {

  id: string;
  userInfo: UserInfo;
  trips: TripDetails[];
  subscribe:boolean=true;
  subscription:string[];

  constructor(private userInfoService: UserInfoService, private router: Router, activeRoute: ActivatedRoute) {
    this.id = router.url.toString();
    let s : string[];
    s = this.id.split('/');
    this.id=s[s.length-1];

    var s2 = JSON.parse(localStorage.getItem('subs'));
    this.subscribe=true;
    for(var i=0;i<s2.length;i++)
    {
      if(s2[i].toString()==this.id)
      {
        this.subscribe=false;
        break;
      }
    }

  }

  ngOnInit() {
    this.loadUserInfo(Number.parseInt(this.id));
  }

  loadUserInfo(id:number)
  {
    this.userInfoService.getUserInfo(id).subscribe((data: UserInfo) => {
      this.userInfo = data;
  });
  }

  loadTrips()
  {
    this.userInfoService.getTrips(this.id)
    .subscribe((trips: TripDetails[]) => {
      this.trips = trips;
    },
      error => {
        //this.notificationService.printErrorMessage(error);
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
          for(var i=0;i<s.length;i++)
          {
            s2.push(s[i]);
          }
          s2.push(Number.parseInt(this.id));

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

        for(var i=0;i<s.length;i++)
        {
          if(s[i].toString()!=this.id)
          {
            s2.push(s[i]);
          }
        }
        localStorage.removeItem('subs');
        localStorage.setItem('subs',JSON.stringify(s2));
        this.subscribe=true;
      }
    },
    error => {
      //this.notificationService.printErrorMessage(error);
    });
  }

}
