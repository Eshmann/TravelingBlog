import { Component, OnInit } from '@angular/core';
import {STrip} from './models/ShortTrip.interface'
import { ShortTripService } from './services/shortTrip.service';

@Component({
  selector: 'app-short-trip',
  templateUrl: './short-trip.component.html',
  styleUrls: ['./short-trip.component.scss']
})
export class ShortTripComponent implements OnInit {
  shortTrip : STrip[];

  constructor(private shortTripService: ShortTripService) { }

  ngOnInit() {
    console.log("Initializing");
    this.loadTrips();
  }

  loadTrips(){
    this.shortTripService.getTripsPage()
    .subscribe((shortTrip: STrip[]) => {
      this.shortTrip = shortTrip;
      console.log(shortTrip);
  });
  }

}
