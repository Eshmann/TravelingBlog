import { Component, OnInit,HostListener } from '@angular/core';
import { TripService } from '../trip.service';
import { Trip } from '../models/trip';
import { TripPagination } from '../models/TripPagination';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Input } from '@angular/core';
import { DashboardService } from '../../dashboard/services/dashboard.service';

@Component({
  selector: 'app-triplist',
  templateUrl: './triplist.component.html',
  styleUrls: ['./triplist.component.scss']
})
export class TriplistComponent implements OnInit {

  @Input() trip:TripPagination;
  @Input() trips:Trip[] = [];
  @Input() page:number = 1;
  @Input() isEmpty:boolean = false;
  @Input() total:number;
  constructor(private tripService:TripService, config : NgbRatingConfig, private editServ:DashboardService) 
  { 
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit() {
    this.loadTripsForPagination(1);
  }
  loadTrips()
  {
    this.tripService.getTrips(this.page)
    .subscribe((resp:TripPagination)=>this.onSuccess(resp));
  }
  
  onSuccess(res:TripPagination) {  
    console.log(res);
    if (res != undefined&&res.trips.length!=0) {  
      this.trips = [];
      this.trip = new TripPagination();
      res.trips.forEach(item => {
        if(item.user.pictureUrl)
          item.user.pictureUrl = 'https://travelpictures.blob.core.windows.net' +item.user.pictureUrl;  
        this.trips.push(item);  
      });
      this.total = res.total;  
    }
    else
    {
      this.isEmpty = true;
    }  
  }

  getWidthForStars(trip:Trip)
  {
    for(var i = 0; i < this.trips.length; i++)
    {
      if(this.trips[i] === trip)
      {
        return (this.trips[i].ratingTrip*100)/5;
      }
    }
    return 0;
  }

  deleteTrip(trip:Trip){
    let conf = confirm("Are you sure?")
    if(conf)
      this.editServ.deleteTrip(trip.id).subscribe((dara)=>this.loadTrips());
  }
  checkIfTrips()
  {
    if(this.trips.length === 0)
    {
      document.getElementById('server').setAttribute('style', 'height: 20em;');
    }
  }

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
      this.total = res.total;
      this.trips = [];
      res.trips.forEach(item=>{
        if(item.user.pictureUrl)
          item.user.pictureUrl = 'https://travelpictures.blob.core.windows.net' + item.user.pictureUrl; 
        this.trips.push(item);
      })
    }
    else
    {
      this.isEmpty = true;
    }  
  }
}
