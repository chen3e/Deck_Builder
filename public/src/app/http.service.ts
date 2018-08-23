import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  
  allCards(){
    console.log("Made it to service");
    return this._http.get('/cards');
  }

  filter(color){
    console.log(color, "in service!")
    return this._http.get('/cards/'+color);
  }

  getCreatures(params){
    console.log("In service:", params);
    return this._http.post('/creature', params);
  }

  getNonCreatures(params){
    return this._http.post('/noncreature', params);
  }

  getLands(params){
    return this._http.post('/lands', params);
  }
}
