import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  _apiURI: string;

  constructor() {
    this._apiURI = 'https://trvlblg.azurewebsites.net';
  }

  getApiURI() {
    return this._apiURI;
  }
}
