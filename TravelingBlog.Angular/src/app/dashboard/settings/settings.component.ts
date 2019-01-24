import { Component, OnInit } from '@angular/core';

import { DashboardService } from '../services/dashboard.service';
import { HomeDetails } from '../models/home.details.interface';
import { UserDetails } from '../models/user.details.interface';
import { BaseService } from '../../shared/services/base.service';
import { Router } from '@angular/router';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  providers: [DashboardService]//
})

export class SettingsComponent implements OnInit  {

  user: UserDetails = new UserDetails();
  selectedFile: ImageSnippet;
  homeDetails: HomeDetails;
  baseUrl: string = '';


  constructor(private dashboardService: DashboardService, private router: Router, private imageService: DashboardService) {
    this.homeDetails = new HomeDetails();
  }

ngOnInit() {

    this.dashboardService.getHomeDetails()
      .subscribe((homeDetails: HomeDetails) => {
        this.homeDetails = homeDetails;
        this.homeDetails.pictureUrl = 'https://travelpictures.blob.core.windows.net' + this.homeDetails.pictureUrl;
      });
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);
    });

    reader.readAsDataURL(file);
  }

  onFileChanged() {
    this.imageService.uploadImage(this.selectedFile.file).subscribe(
      (res) => {
        if (res) {
        this.router.navigate(['/dashboard/home'], { queryParams: { brandNew: true }}); }
      },
      (err) => {
      });
  }

  saveChange() {
      this.dashboardService.updateUser(this.user).subscribe(data => {});
      console.log(this.user.firstName + ' ' + this.user.lastName);
  }
}
