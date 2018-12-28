import { Component, OnInit } from '@angular/core';
import { Trip } from './models/bestTrip.interface';
import { BestTripService } from './services/bestTrip.service';
import { count } from 'rxjs/operator/count';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  bestTrip: Trip[];
 // count :string ;
  constructor(private bestTripService:BestTripService ) { }

  ngOnInit() {
    console.log("Initializing");
    this.loadTrips();
  }

  loadTrips(){
    //this.bestTripService.getTripWithHighestRating(this.count)
    this.bestTripService.getTripWithHighestRating()
    .subscribe((bestTrip: Trip[]) => {
      this.bestTrip = bestTrip;
      console.log(bestTrip);
  });
  }


  ctrl = new FormControl(null, Validators.required);

  toggle() {
    if (this.ctrl.disabled) {
      this.ctrl.enable();
    } else {
      this.ctrl.disable();
    }
  }
}