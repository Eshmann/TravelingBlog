import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { BaseService } from '../../shared/services/base.service';
import { ConfigService } from '../../shared/utils/config.service';
import { Observable } from 'rxjs';
import { STrip } from '../models/ShortTrip.interface';
import '../../rxjs-operators';


@Injectable()

export class ShortTripService extends BaseService{

    baseUrl: string = '';
    constructor(private http: Http, private configService : ConfigService) {
        super();
        this.baseUrl = configService.getApiURI();
    }

    getTripsPage():Observable<STrip []>{

        return this.http.get(this.baseUrl + "/api/trip/GetTripsPage")
        .map(response => response.json())
        .catch(this.handleError);
    }
    
}