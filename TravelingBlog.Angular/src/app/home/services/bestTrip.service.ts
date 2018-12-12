import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { BaseService } from '../../shared/services/base.service';
import { ConfigService } from '../../shared/utils/config.service';
import { Observable } from 'rxjs';
import { Trip } from '../models/bestTrip.interface';
import '../../rxjs-operators';


@Injectable()

export class BestTripService extends BaseService{

    baseUrl: string = '';
    constructor(private http: Http, private configService : ConfigService) {
        super();
        this.baseUrl = configService.getApiURI();
    }

    getTripWithHighestRating():Observable<Trip []>{

        return this.http.get(this.baseUrl + "/api/trip/besttrips")
        .map(response => response.json())
        .catch(this.handleError);
    }

    createNewRating():Observable<Trip[]>{

        return this.http.get(this.baseUrl + "/api/trip/addtrip")
        .map(response => response.json())
        .catch(this.handleError);
    }


}