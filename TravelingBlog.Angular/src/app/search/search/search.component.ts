import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchService } from '../services/search.services';
import { Search, Country, Trip } from '../models/search.class';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    trips: Trip[];
    countries: Country[];
    id:string;
    countryid: string;
    totalpages : number;
    nextpage : boolean = false;
    prevpage : boolean = false;
    currentpage : number = 1;
  constructor(private searchservice: SearchService, private router: Router, activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.getAllCountries();
  }

  loadTrips(id:string)
  {
    console.log(this.countryid);
    this.searchservice.getTrip(id, this.countryid)
    .subscribe((trips: Search) => {
      this.trips = trips.result;
      this.totalpages = trips.total/10;
      if(trips.total%10!= 0){
        this.totalpages += 1;
      }
      if(this.totalpages > 1 ){
        this.nextpage = true;
      }
    },
      error => {
        //this.notificationService.printErrorMessage(error);
      });
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
  previous(){
    if(this.currentpage > 1){
      this.currentpage--;
      this.nextpage = true;
      let k : string;
      k = this.id + '&pageNumber=' + this.currentpage;
      this.searchservice.getTrip(k, this.countryid);
    }
    if(this.currentpage == 1){
      this.prevpage = false;
    }
  }
  
  next(){
    if(this.currentpage < this.totalpages){
      this.currentpage++;
      this.prevpage = true;
    }
    if(this.currentpage == this.totalpages){
      this.nextpage = false;
    }
  }
  
}