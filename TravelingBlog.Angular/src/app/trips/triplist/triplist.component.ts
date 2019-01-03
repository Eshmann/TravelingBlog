import { Component, OnInit,HostListener } from '@angular/core';
import { TripService } from '../trip.service';
import { Trip } from '../models/trip';
import { TripPagination } from '../models/TripPagination';

@Component({
  selector: 'app-triplist',
  templateUrl: './triplist.component.html',
  styleUrls: ['./triplist.component.scss']
})
export class TriplistComponent implements OnInit {

  trip:TripPagination;
  trips:Trip[] = [];
  page:number = 1;
  isEmpty:boolean = false;
  total:number;
  constructor(private tripService:TripService) { }

  ngOnInit() {
    this.loadTrips();
  }
  loadTrips()
  {
    this.tripService.getTrips(this.page)
    .subscribe((resp:TripPagination)=>this.onSuccess(resp));
  }
  
  onSuccess(res:TripPagination) {  
    console.log(res);  
    if (res != undefined&&res.trips.length!=0) {  
      res.trips.forEach(item => {  
        this.trips.push(item);  
      });
      this.total = res.total;  
    }
    else
    {
      this.isEmpty = true;
    }  
  }

  //
  //-------- Pagination -------
  //

  getPage(num:number){
    if(!this.isEmpty){
      this.loadTripsForPagination(num);
    }    
    window.scrollTo(0,0);
  }
  loadTripsForPagination(num:number)
  {
    this.page = num;
    this.tripService.getTrips(this.page)
    .subscribe((resp:TripPagination)=>this.onSuccessForPagination(resp));
  }
  onSuccessForPagination(res:TripPagination) {  
    console.log(res);  
    if (res.trips != undefined&&res.trips.length!=0) {  
      this.trips = res.trips;
      this.total = res.total;
    }
    else
    {
      this.isEmpty = true;
    }  
  }
}
