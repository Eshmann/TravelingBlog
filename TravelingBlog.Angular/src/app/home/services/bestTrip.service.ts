import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { BaseService } from '../../shared/services/base.service';
import { ConfigService } from '../../shared/utils/config.service';
import { Observable } from 'rxjs';
import { Trip } from '../models/bestTrip.interface';
import {Rating} from '../models/bestTrip.interface';
import '../../rxjs-operators';


@Injectable()

export class BestTripService extends BaseService{

    baseUrl: string = '';
    constructor(private http: Http, private configService : ConfigService) {
        super();
        this.baseUrl = configService.getApiURI();
    }

    getTripWithHighestRating():Observable<Trip[]>{
      
        return this.http.get(this.baseUrl + "/api/trip/bestTrip")
        .map(response => response.json())
        .catch(this.handleError);
    }
    addRating(rating: Rating){

        console.log("Hello2");
        let headers = new Headers();
        headers.append('Content-Type','application/json');
        let authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', `Bearer ${authToken}`);
        return this.http.post(this.baseUrl+ "api/rating/add", JSON.stringify(rating), {headers});
    }

    
}