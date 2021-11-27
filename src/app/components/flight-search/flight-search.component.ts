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

  filteredFlights: any;

  searchText: any;

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
      this.filteredFlights = flights;
    });
  }

  search(): void {
    this.filteredFlights = this.flights.filter((e: any) => e.AirlineName.toLowerCase().includes(this.searchText.toLowerCase()))
  }

  clearSearch(): void {
    this.searchText = '';
    this.filteredFlights = this.flights;
  }

}
