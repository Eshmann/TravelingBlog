import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  _apiURI: string;

  constructor() {
    this._apiURI = 'http://travelingblog.azurewebsites.net';
  }

  getApiURI() {
    return this._apiURI;
  }
}
