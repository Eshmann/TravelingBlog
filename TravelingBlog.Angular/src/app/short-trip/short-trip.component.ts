import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { STrip } from './models/ShortTrip.interface'
import { ShortTripService } from './services/shortTrip.service';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-short-trip',
  templateUrl: './short-trip.component.html',
  template: `<input [ngModel]="userName" (ngModelChange)="onNameChange($event)" />`,
  styleUrls: ['./short-trip.component.scss']
})
export class ShortTripComponent implements OnInit {
  shortTrip: STrip[];

  constructor(private shortTripService: ShortTripService) { }

  @Input() rating: string;
  @Input() ratingId: number;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();
  onName(model: string) {
    this.rating = model,
      this.ratingClick.emit(model);
  }

  ngOnInit() {
    console.log("Initializing");
    this.loadTrips();
  }

  loadTrips() {
    this.shortTripService.getTripsPage()
      .subscribe((shortTrip: STrip[]) => {
        this.shortTrip = shortTrip;
        console.log(shortTrip);
      });
  }


}
