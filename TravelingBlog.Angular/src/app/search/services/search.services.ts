import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { ConfigService } from '../../shared/utils/config.service';

import { BaseService } from '../../shared/services/base.service';

import { Observable } from 'rxjs/Rx';

// Add the RxJS Observable operators we need in this app.
import '../../rxjs-operators';
import { Search, Country } from '../models/search.class';

@Injectable()

export class SearchService extends BaseService {

  baseUrl: string = '';


  constructor(private http: Http, private configService: ConfigService) {
    super();
    this.baseUrl = configService.getApiURI();
  }

  getTrip(id: string, countryid : string): Observable<Search>{
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    if(countryid == '-1'){
      return this.http.get(this.baseUrl + "/api/search/search?searchQuery=" + id,{ headers })
      .map(response => response.json())
      .catch(this.handleError);
    }
    else{
      return this.http.get(this.baseUrl + "/api/search/filter?id=" + countryid,{ headers })
    .map(response => response.json())
    .catch(this.handleError);
    }
  }

  getCountries() : Observable<Country[]>{
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.baseUrl +"/api/country" , {headers})
    .map(response =>response.json())
    .catch(this.handleError);
  }
}