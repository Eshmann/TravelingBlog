import { Component, OnInit } from '@angular/core';

import { DashboardService } from '../services/dashboard.service';
import { UserDetails } from '../models/user.details.interface';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  providers: [DashboardService]//
})

export class SettingsComponent implements OnInit {

  user: UserDetails = new UserDetails();

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
  }

  saveChange() {
      this.dashboardService.updateUser(this.user).subscribe(data => {});
      console.log(this.user.firstName + ' ' + this.user.lastName);
  }
}
