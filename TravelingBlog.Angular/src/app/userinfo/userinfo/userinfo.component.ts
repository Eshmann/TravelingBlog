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

    var s2 = localStorage.getItem('subs');
    this.subscribe=true;
    if(s2!=null)
    {
      this.subscription=s2.split('%');
      this.subscription.forEach(element => {
        if(element==this.id)
        {
          this.subscribe=false;
        }
      });
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
          var s = localStorage.getItem('subs');
          if(s==null)
          {
            s=this.id;
          }
          else
          {
            s+="%"+this.id;
          }
          localStorage.removeItem('subs');
          localStorage.setItem('subs',s);
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
        var s = localStorage.getItem('subs');
        var subl = s.split('%');
        var k = subl.indexOf(this.id);
        subl.splice(k,1);
        localStorage.removeItem('subs');
        s ="";
        for(var i=0;i<subl.length-1;i++)
        {
          s+=subl[i]+"%";
        }
        if(subl.length>0)
        {
          s+=subl[subl.length-1];
          localStorage.setItem('subs',s);
        }

        this.subscribe=true;
      }
    },
    error => {
      //this.notificationService.printErrorMessage(error);
    });
  }

}
