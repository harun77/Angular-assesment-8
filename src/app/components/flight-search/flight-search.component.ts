import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FlightService } from 'src/app/services/flight-service/flight-service';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent implements OnInit {

  userForm: FormGroup;

  flights: any;

  constructor(private fb: FormBuilder, private flightService: FlightService) {
    this.userForm = fb.group({
      'departureAirport': ['', Validators.required],
      'arrivalAirport': ['', Validators.required],
      'departureDate': ['', Validators.required],
      'returnDate': ['', Validators.required]
    });
  }

  ngOnInit(): void { }

  submit(): void {
    if (this.userForm.invalid) {
      return;
    }

    const data = {
      "DepartureAirportCode": this.userForm.get('departureAirport')?.value,
      "ArrivalAirportCode": this.userForm.get('arrivalAirport')?.value,
      "DepartureDate": this.userForm.get('departureDate')?.value,
      "ReturnDate": this.userForm.get('returnDate')?.value
    };

    this.flightService.getFlights(data).subscribe(flights => {
      this.flights = flights;
    });
  }

}
