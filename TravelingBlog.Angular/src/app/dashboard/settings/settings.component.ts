import { Component, OnInit } from '@angular/core';

import { DashboardService } from '../services/dashboard.service';
import { UserDetails } from '../models/user.details.interface';
import { BaseService } from '../../shared/services/base.service';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  providers: [DashboardService]//
})

export class SettingsComponent extends BaseService {

  user: UserDetails = new UserDetails();
  selectedFile: ImageSnippet;
  baseUrl: string = '';


  constructor(private dashboardService: DashboardService, private imageService: DashboardService) {
    super();
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.imageService.uploadImage(this.selectedFile.file).subscribe(
        (res) => {
        },
        (err) => {
        });
    });

    reader.readAsDataURL(file);
  }

  // onFileChanged(event) {
  //   this.selectedFile = event.target.files[0];
  //   console.log(this.selectedFile);
  // }

  // onUpload() {
  //   // this.http is the injected HttpClient
  //   const uploadData = new FormData();
  //   uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
  //   console.log(uploadData);
  //   let headers = new Headers();
  //   let authToken = localStorage.getItem('auth_token');
  //   headers.append('Authorization', `Bearer ${authToken}`);
  //   this.http.post(this.baseUrl + '/api/settings/upload', uploadData, { headers })
  //     .subscribe(event => {
  //       console.log('HH');
  //   });
  // }


  saveChange() {
      this.dashboardService.updateUser(this.user).subscribe(data => {});
      console.log(this.user.firstName + ' ' + this.user.lastName);
  }
}
