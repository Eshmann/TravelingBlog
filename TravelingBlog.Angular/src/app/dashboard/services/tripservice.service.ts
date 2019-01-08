import { Injectable } from '@angular/core';
import { BaseService } from '../../../app/shared/services/base.service';
import { ConfigService } from '../../shared/utils/config.service';
import { Http,Headers } from '@angular/http';
import { TripDetails } from '../models/trip.details.interface';
import { Observable } from 'rxjs'

@Injectable()
export class TripserviceService extends BaseService {
  private apiUrl:string='';
  private baseUrl:string='/api/trip';
  constructor(private httpClient:Http,private configService:ConfigService) {
    super()
    this.apiUrl=this.configService.getApiURI()
  }
  getTopTrips():Observable<TripDetails[]>
  {
    let headers = this.getHeaders()
    return this.httpClient
    .get(`${this.apiUrl}${this.baseUrl}/bestTrip`,{headers})
    .map(res=>res.json())
    .catch(this.handleError)
    
  }
  private getHeaders(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);
    return headers;
   }
}
