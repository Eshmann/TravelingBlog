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

  constructor(private userInfoService: UserInfoService, private router: Router, activeRoute: ActivatedRoute) {
    this.id = router.url.toString();
    let s : string[];
    s = this.id.split('/');
    this.id=s[s.length-1];
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

}
