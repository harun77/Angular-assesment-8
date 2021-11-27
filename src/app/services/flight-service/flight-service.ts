import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  flightUrl = 'http://nmflightapi.azurewebsites.net/api/flight';

  constructor(public http: HttpClient) { }

  getFlights(): Observable<any> {
    return this.http.get(this.flightUrl);
  }
}
