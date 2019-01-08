import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import { Http } from '@angular/http';
import { ConfigService } from '../../../app/shared/utils/config.service';
import { Observable } from 'rxjs';
import { User } from '../Models/User';
import {  Headers} from '@angular/http';

@Injectable()
export class AdminService extends BaseService{

  private apiUrl:string='';
  private baseUrl:string = '/api/admin';

  constructor(private httpClient:Http,private configService:ConfigService) {
    super();
    this.apiUrl = configService.getApiURI();
   }

   getUsersWithRoles():Observable<User[]>{
    let headers = this.getHeaders();

    return this.httpClient.get(`${this.apiUrl}${this.baseUrl}/userswithroles`,{headers})
    .map(response=>response.json())
    .catch(this.handleError);
   }

   updateUserRoles(user:User, roles:{}){
     let headers = this.getHeaders();

     return this.httpClient.post(`${this.apiUrl}${this.baseUrl}/editUserRoles/${user.userName}`
     ,roles,{headers})
     .map(response=>response.json())
     .catch(this.handleError);
   }

   getHeaders():Headers{
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);
    return headers;
   }
}
