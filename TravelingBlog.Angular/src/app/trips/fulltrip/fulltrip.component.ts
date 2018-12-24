import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TripService } from '../trip.service';
import { TripHalf } from '../models/TripHalf';
import { Location } from '@angular/common';
@Component({
  selector: 'app-fulltrip',
  templateUrl: './fulltrip.component.html',
  styleUrls: ['./fulltrip.component.scss']
})
export class FulltripComponent implements OnInit {

  trip:TripHalf;
  constructor(private activeRoute:ActivatedRoute,private location:Location,private tripService:TripService) { }

  ngOnInit() {
    this.getTrip();
  }
  
  getTrip()
  {
    const id = +this.activeRoute.snapshot.paramMap.get('id');
    this.tripService.getTrip(id).subscribe(resp=>this.trip = resp);
  }
  
  goBack(){
    this.location.back();
  }  
}
