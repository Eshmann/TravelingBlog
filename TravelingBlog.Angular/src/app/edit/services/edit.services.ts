import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { ConfigService } from '../../shared/utils/config.service';

import { BaseService } from '../../shared/services/base.service';

import { Observable } from 'rxjs/Rx';

// Add the RxJS Observable operators we need in this app.
import '../../rxjs-operators';
import { TripWithPost, Post } from '../models/trip.with.post.interface';

@Injectable()

export class EditService extends BaseService {

  baseUrl: string = '';


  constructor(private http: Http, private configService: ConfigService) {
    super();
    this.baseUrl = configService.getApiURI();
  }

  getTrip(id: string): Observable<TripWithPost>{
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);

    return this.http.get(this.baseUrl + "/api/trip/GetTripWithPosts/" + id,{ headers })
    .map(response => response.json())
    .catch(this.handleError);

  }

  updateTrip(trip: TripWithPost)
  {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);

    return this.http.put(this.baseUrl + "/api/trip/" + trip.id , trip, { headers });
  }

  createPost(post: Post)
  {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);

    return this.http.post(this.baseUrl + "/api/PostBlog", JSON.stringify(post), { headers }).map(response => response.json()).catch(this.handleError);
  }

  updatePost(post: Post)
  {
    console.log("itworls?)");
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);

    //return this.http.put(this.baseUrl + "/api/PostBlog/" + post.id, JSON.stringify(post), { headers }).map(response => response.json()).catch(this.handleError);
    return this.http.put(this.baseUrl + "/api/postblog/" + post.id, post, { headers });
  }

}
