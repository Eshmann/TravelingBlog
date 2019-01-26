import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';

import { HomeDetails } from '../models/home.details.interface';
import { ConfigService } from '../../shared/utils/config.service';

import { BaseService } from '../../shared/services/base.service';

import { Observable } from 'rxjs';

// Add the RxJS Observable operators we need in this app.
import '../../rxjs-operators';
import { TripDetails } from '../models/trip.details.interface';
import { UserDetails } from '../models/user.details.interface';
import { Body } from '@angular/http/src/body';
import { SubscriberDetails } from '../models/subsciber.details.interface';

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

    return this.http.get(this.baseUrl + '/api/dashboard/home', { headers })
      .map(response => response.json())
      .catch(this.handleError);
  }

  getSubscriberDetails(): Observable<SubscriberDetails[]> {
    localStorage.removeItem('subs');
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);

    return this.http.get(this.baseUrl + '/api/Subscription/getMySubscription', { headers })
    .map(response => response.json())
    .catch(this.handleError);
  }

  getTrips(): Observable<TripDetails[]>{
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);

    return this.http.get(this.baseUrl + '/api/trip/mytrips', { headers })
    .map(response => response.json())
    .catch(this.handleError);
  }

  createTrip(trip: TripDetails) {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);
    return this.http.post(this.baseUrl + '/api/trip', JSON.stringify(trip), { headers })
    .catch(this.handleError);
  }

  updateTrip(trip: TripDetails) {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);

    return this.http.put(this.baseUrl + '/api/trip' , trip, { headers })
    .catch(this.handleError)
  }

  deleteTrip(id: number) {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);

    return this.http.delete(this.baseUrl + '/api/trip/' + id , { headers })
    .catch(this.handleError)
  }

  updateUser(user: UserDetails) {

    console.log('service');
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);
      return this.http.put(this.baseUrl + '/api/settings/editusername', user, {headers})
      .map(response => response.json())
      .catch(this.handleError);
  }

  public uploadImage(image: File): Observable<Response> {
    const formData = new FormData();
    console.log(formData);
    let headers = new Headers();
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);
    formData.append('files', image);

    console.log(formData);
    return this.http.post(this.baseUrl + '/api/settings/upload', formData, {headers})
    .map(res => res.json());

  }
}
