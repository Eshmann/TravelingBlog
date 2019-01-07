import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { ConfigService } from '../../shared/utils/config.service';

import { BaseService } from '../../shared/services/base.service';

import { Observable } from 'rxjs/Rx';

// Add the RxJS Observable operators we need in this app.
import '../../rxjs-operators';
import { Trip, PostBlog } from '../models/fulltrip.class';

@Injectable()

export class FullTripService extends BaseService {

  baseUrl: string = '';
  constructor(private http: Http, private configService: ConfigService) {
    super();
    this.baseUrl = configService.getApiURI();
  }

  getFullTrip(id: string): Observable<Trip> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.baseUrl + "/api/trip/GetTripWithPosts/" + id, { headers })
      .map(response => response.json())
      .catch(this.handleError);
  }

}