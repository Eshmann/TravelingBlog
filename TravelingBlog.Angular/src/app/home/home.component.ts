import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Trip, Rating } from './models/bestTrip.interface';
import { BestTripService } from './services/bestTrip.service';
import { FormControl, Validators } from '@angular/forms';
//import { RatingService } from './services/rating.service';
// import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { ConfigService } from '../shared/utils/config.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // providers : [NgbRatingConfig]
})

export class HomeComponent implements OnInit {
  bestTrip: Trip[];
  profilePhotos: string[] = [
  "assets/images/user-img/user-3.jpg",
  "assets/images/user-img/user-1.jpg",
  "assets/images/user-img/user-2.jpg"];
 
  rating: string;
  value: string;

  baseUrl: string = '';
  constructor(private bestTripService: BestTripService, private configService : ConfigService,
     
    //private ratingService : RatingService
    ) { 
    //   this.ratingService = ratingService;
    this.baseUrl = configService.getApiURI();
  }

  ngOnInit() {
    console.log("Initializing");
    this.loadTrips();
    // this.showRating(this.rating);
  }

  loadTrips() {
    this.bestTripService.getTripWithHighestRating()
      .subscribe((bestTrip: Trip[]) => {
        this.bestTrip = bestTrip;
        console.log(bestTrip);
      });
  }

  addRating(value) {
    this.rating = this.rating;
    console.log(value);
  }
  getValue(id,value){
    console.log("Hello");
    var rt = new Rating(value, 0, id);
    this.bestTripService.addRating(rt)
    this.value = value;
  }

}
