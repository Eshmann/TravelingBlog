import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FullTripService } from '../services/fulltrip.services';
import { FullTrip, PostBlog, Trip } from '../models/fulltrip.class';

@Component({
  selector: 'app-fulltrip',
  templateUrl: './fulltrip.component.html',
  styleUrls: ['./fulltrip.component.scss']
})

export class FullTripComponent implements OnInit {

  idtrip: string ;
  trip: Trip;
  constructor(private fulltripservice: FullTripService, private router: Router, activeRoute: ActivatedRoute) {
    this.trip = new Trip();
  }

  ngOnInit() {
  }

  getFullTrip(id: string ) {
    this.fulltripservice.getFullTrip(this.idtrip)
      .subscribe((trip: Trip) => {
        this.trip = trip;
        console.log(trip);
      },
        error => {
          //this.notificationService.printErrorMessage(error);
        });
  }

}