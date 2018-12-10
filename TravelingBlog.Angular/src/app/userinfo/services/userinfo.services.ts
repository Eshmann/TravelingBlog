import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { ConfigService } from '../../shared/utils/config.service';

import { BaseService } from '../../shared/services/base.service';

import { Observable } from 'rxjs/Rx';

// Add the RxJS Observable operators we need in this app.
import '../../rxjs-operators';

import { UserInfo } from '../models/userinfo.interface';
import { TripDetails } from '../../dashboard/models/trip.details.interface';

@Injectable()

export class UserInfoService extends BaseService {

  baseUrl: string = '';


  constructor(private http: Http, private configService: ConfigService) {
    super();
    this.baseUrl = configService.getApiURI();
  }

  getUserInfo(id:number):Observable<UserInfo>
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.get(this.baseUrl + "/api/accounts/" + id , { headers })
    .map(response => response.json())
    .catch(this.handleError);
  }
  getTrips(id: string): Observable<TripDetails[]>{
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.get(this.baseUrl + "/api/trip/mytrips/" + id,{ headers })
    .map(response => response.json())
    .catch(this.handleError);
  }

}
