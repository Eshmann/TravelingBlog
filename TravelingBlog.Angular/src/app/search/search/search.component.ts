import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchService } from '../services/search.services';
import { Search, Country, Trip } from '../models/search.class';
import { query } from '@angular/core/src/animation/dsl';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    trip : Search;
    trips: Trip[] = [];
    countries: Country[];
    query:string;
    countryid: string;
    page:number = 1;
    isEmpty:boolean = false;
    total:number;
  constructor(private searchservice: SearchService, private router: Router, activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.getAllCountries();
  }

  loadTrips()
  {
    this.trips=[];
    this.searchservice.getTrip(this.query, this.countryid, this.page)
    .subscribe((resp:Search)=>this.onSuccess(resp));
  }
  
  onSuccess(res:Search) {  
    console.log(res);  
    if (res != undefined && res.result.length!=0) {  
      res.result.forEach(item => {  
        this.trips.push(item);  
      });
      this.total = res.total;  
    }
    else
    {
      this.isEmpty = true;
    }  
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
  
}