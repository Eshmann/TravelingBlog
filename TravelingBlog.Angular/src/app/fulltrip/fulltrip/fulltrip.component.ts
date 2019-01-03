import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FullTripService } from '../services/fulltrip.services';
import { FullTrip, PostBlog, Trip } from '../models/fulltrip.class';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-fulltrip',
  templateUrl: './fulltrip.component.html',
  styleUrls: ['./fulltrip.component.scss'],
  providers : [NgbRatingConfig]
})

export class FullTripComponent implements OnInit {

  idtrip: string ;
  trip: Trip;
  constructor(private fulltripservice: FullTripService, private router: Router, activeRoute: ActivatedRoute,config : NgbRatingConfig) {
    this.trip = new Trip();
    config.max = 5;
    config.readonly = true;
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