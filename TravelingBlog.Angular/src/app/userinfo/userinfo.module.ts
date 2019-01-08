import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/modules/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { routing } from './userinfo.routing';

import { UserInfoComponent } from './userinfo/userinfo.component';
import { UserInfoService } from './services/userinfo.services';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    routing,
    SharedModule
  ],
  declarations: [UserInfoComponent],
  exports: [],
  providers: [UserInfoService]
})
export class UserInfoModule { }
