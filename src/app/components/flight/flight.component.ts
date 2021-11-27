import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit {

  @Input('flight') flight: any;

  constructor() { }

  ngOnInit(): void { }

}
