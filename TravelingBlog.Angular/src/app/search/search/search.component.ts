import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchService } from '../services/search.services';
import { Search, Country } from '../models/search.class';
import { TripPagination } from '../../trips/models/TripPagination';
import { Trip } from '../../trips/models/Trip';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    trip : Search;
    trips: Trip[] = [];
    countries: Country[];
    query:string = '';
    countryid: string = '-1';
    page:number = 1;
    isEmpty:boolean = false;
    total:number = 0;
    tripPagination: TripPagination;
    
  constructor(private searchservice: SearchService, private router: Router, activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.getAllCountries();
  }

  loadTrips()
  { 
    if(this.query != '')
    {
      this.trips=[];
      this.searchservice.getTrip(this.query, this.countryid, this.page)
      .subscribe((resp:Search)=>this.onSuccess(resp));
    }
    this.lol();
  }
  
  onSuccess(res:Search) {  
    console.log(res);  
    if (res != undefined && res.result.length!=0) {  
      res.result.forEach(item => {  
        this.trips.push(item);  
      });
      this.total = res.total;  
      this.setTripPagination();
      this.isEmpty = false;
    }
    else
    {
      this.isEmpty = true;
    }  
    this.checkIfFound();
  }
  
  checkIfFound()
  {
    if(this.isEmpty === true)
    {
      document.getElementById('notFound').setAttribute('style', 'display: block;');
      document.getElementById('notFoundText').setAttribute('style', 'display: block;');
    }
    else
    {     
      document.getElementById('notFound').setAttribute('style', 'display: none; ');     
      document.getElementById('notFoundText').setAttribute('style', 'display: none; ');
    }
  }
  setTripPagination()
  {
    this.tripPagination.total = this.trip.total;
    this.tripPagination.trips = this.trip.result;
  }
  getAllCountries(){
    this.searchservice.getCountries()
    .subscribe((countries : Country[]) => {
      this.countries = countries;
      console.log(countries);
    },
      error => {
        //this.notificationService.printErrorMessage(error);
      });
  }
  getPage(page:number){
    if(!this.isEmpty){
      this.loadTripsForPagination(page);
    }    
    window.scrollTo(0,0);
  }
  loadTripsForPagination(num : number)
  {
    this.page = num;
    this.searchservice.getTrip(this.query, this.countryid, num)
    .subscribe((resp:Search)=>this.onSuccessForPagination(resp));
  }
  onSuccessForPagination(res:Search) {  
    console.log(res);  
    if (res.result != undefined && res.result.length!=0) {  
      this.trips = res.result;
      this.total = res.total;
    }
    else
    {
      this.isEmpty = true;
    }  
  }
  lol()
  {
    document.getElementById('filters').setAttribute('style', 'display: block;');
  }
  
}
