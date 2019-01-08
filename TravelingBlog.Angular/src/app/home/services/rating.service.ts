import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { BaseService } from '../../shared/services/base.service';
import { ConfigService } from '../../shared/utils/config.service';
import { Observable } from 'rxjs';
import '../../rxjs-operators';
import { Rating } from '../models/bestTrip.interface';



@Injectable()

export class RatingService extends BaseService {
    baseUrl: string = '';
    rating: string = '';

    constructor(private http: Http, private configService: ConfigService) {
        super();
        this.baseUrl = configService.getApiURI();
    }

    addNewUserRating(value: string): Observable<Rating[]> {
        return this.http.post(this.baseUrl + "/api/trip/showRating", value)
            .map(response => response.json())
            .catch(this.handleError);
    }
    
    addRating(rating: Rating) {

        let headers = new Headers();
        headers.append('Content-Type','application/json');
        let authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', `Bearer ${authToken}`);
        return this.http.post(this.baseUrl+ "api/rating/add", JSON.stringify(rating), {headers});
    }
}
