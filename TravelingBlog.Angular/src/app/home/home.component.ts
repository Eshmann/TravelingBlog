import { Component, OnInit } from '@angular/core';
import { Trip } from './models/bestTrip.interface';
import { BestTripService } from './services/bestTrip.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  bestTrip: Trip[];
 
    
  constructor(private bestTripService:BestTripService ) { }

  ngOnInit() {
    console.log("Initializing");
    this.loadTrips();
  }

  loadTrips(){
    this.bestTripService.getTripWithHighestRating()
    .subscribe((bestTrip: Trip[]) => {
      this.bestTrip = bestTrip;
      console.log(bestTrip);
  });
  }
}
