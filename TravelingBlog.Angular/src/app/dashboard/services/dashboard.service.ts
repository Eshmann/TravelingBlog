import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { HomeDetails } from '../models/home.details.interface';
import { ConfigService } from '../../shared/utils/config.service';

import { BaseService } from '../../shared/services/base.service';

import { Observable } from 'rxjs/Rx';

// Add the RxJS Observable operators we need in this app.
import '../../rxjs-operators';
import { TripDetails } from '../models/trip.details.interface';

@Injectable()

export class DashboardService extends BaseService {

  baseUrl: string = '';

  constructor(private http: Http, private configService: ConfigService) {
    super();
    this.baseUrl = configService.getApiURI();
  }

  getHomeDetails(): Observable<HomeDetails> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);

    return this.http.get(this.baseUrl + "/api/dashboard/home", { headers })
      .map(response => response.json())
      .catch(this.handleError);
  }

  getTrips(): Observable<TripDetails[]>{
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);

    return this.http.get(this.baseUrl + "/api/trip/mytrips",{ headers })
    .map(response => response.json())
    .catch(this.handleError);
  }

  createTrip(trip: TripDetails)
  {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);

    return this.http.post(this.baseUrl + "/api/trip/addTrip", JSON.stringify(trip), { headers }).map(response => response.json()).catch(this.handleError);

  }

  updateTrip(trip: TripDetails)
  {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);

    return this.http.put(this.baseUrl + "/api/trip/" + trip.id , trip, { headers });
  }

  deleteTrip(id: number)
  {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);

    return this.http.delete(this.baseUrl + "/api/trip/" + id , { headers });
  }

}
