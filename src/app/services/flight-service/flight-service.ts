import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  flightUrl = 'http://nmflightapi.azurewebsites.net/api/flight';

  constructor(public http: HttpClient) { }

  getFlights(data: any): Observable<any> {
    let params = new HttpParams();
    Object.keys(data).forEach(key => {
      params = params.append(key, data[key]);
    });
    return this.http.get(this.flightUrl, { params });
  }
}
