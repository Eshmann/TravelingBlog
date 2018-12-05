import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EditService } from '../services/edit.services';
import { TripWithPost, Post } from '../models/trip.with.post.interface';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})
export class TripEditComponent implements OnInit {

  id: string;
  trip: TripWithPost;    // изменяемый объект
  loaded: boolean = false;
  post: Post = new Post();
  tableMode: boolean = true;

  constructor(private editService: EditService, private router: Router, activeRoute: ActivatedRoute) {
   // this.id = Number.parseInt(activeRoute.snapshot.params["id"]);
    //this.id = activeRoute.snapshot.params['id'];
    this.id = router.url.toString();
    let s : string;

    s = this.id.substring(11,this.id.length);
    this.id=s;
  }

  ngOnInit() {

    this.loadTrip(this.id);
  }

  loadTrip(id: string)
  {
    this.editService.getTrip(this.id)
    .subscribe((data: TripWithPost) => {
        this.trip = data;
        if (this.trip != null) this.loaded = true;
    });
  }

  save(post: Post){
    this.post.tripId=Number.parseInt(this.id);
    console.log(this.trip.postBlogs);
    console.log(post);
    if(post.id == null)
    {
      
      this.editService.createPost(post).subscribe(data => this.loadTrip(this.id));
      
    }
    else
    {
      console.log("hello");
      this.editService.updatePost(post).subscribe(data => this.loadTrip(this.id))
    }
    this.cancel();
  }
  cancel()
  {
    this.post = new Post();
    this.tableMode = true;
  }

  saveTrip(){
      this.editService.updateTrip(this.trip).subscribe(data => this.loadTrip(this.id))
  }

  add()
  {
    this.cancel();
    this.tableMode = false;
  }

}
