import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FullTripService } from '../services/fulltrip.services';
import {  PostBlog, Trip } from '../models/fulltrip.class';
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

    this.idtrip = router.url.toString();
    let s : string[];
    s = this.idtrip.split('/');
    this.idtrip=s[s.length-1];
  }

  ngOnInit() {
    this.getFullTrip(this.idtrip);
  }

  getFullTrip(id: string) {
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