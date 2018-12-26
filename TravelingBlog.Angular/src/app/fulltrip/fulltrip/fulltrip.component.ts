import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FullTripServices } from '../services/fulltrip.services';
import { FullTrip } from '../models/fulltrip.class';

@Component({
  selector: 'app-fulltrip',
  templateUrl: './fulltrip.component.html',
  styleUrls: ['./fulltrip.component.scss']
})

export class FullTripComponent implements OnInit {

    constructor(private searchservice: FullTripServices, private router: Router, activeRoute: ActivatedRoute) {
    }

    ngOnInit() {
      }

}