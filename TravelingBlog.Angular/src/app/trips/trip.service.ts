import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { BaseService } from "../shared/services/base.service";

import { Observable } from 'rxjs/Rx';
import '../rxjs-operators';
import { Trip } from './models/trip';
import { ConfigService } from '../shared/utils/config.service';
import { TripHalf } from './models/TripHalf';


@Injectable()
export class TripService extends BaseService {

  private apiUrl:string='';
  private baseUrl:string='/api/trip';
  constructor(private httpClient:Http,private configService:ConfigService) {
    super();
    this.apiUrl=this.configService.getApiURI();
   }
   getTrips(page:number):Observable<Trip>{
    let headers = this.getHeaders();

    return this.httpClient.get(`${this.apiUrl}${this.baseUrl}?pagenumber=${page}`,{headers})
    .map(response=>response.json())
    .catch(this.handleError);
   }
   getTrip(id:number):Observable<TripHalf>{
      let headers = this.getHeaders();
      return this.httpClient.get(`${this.apiUrl}${this.baseUrl}/${id}`,{headers}).
      map(response=>response.json())
      .catch(this.handleError);
   }
   getFullTrip(id:number):Observable<Trip>
   {
    let headers = this.getHeaders();
    return this.httpClient.get(`${this.apiUrl}${this.baseUrl}/${id}`,{headers}).
    map(response=>response.json())
    .catch(this.handleError);
   }
   createTrip(trip:Trip):Observable<TripHalf>{
    let headers = this.getHeaders();

    return this.httpClient.post(`${this.apiUrl}${this.baseUrl}`,trip,{headers})
     .map(Response=>Response.json())
     .catch(this.handleError);
   }
   
   getHeaders(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);
    return headers;
   }
}
