import { Component } from "@angular/core";
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component ({
    selector:'app-homep',
    templateUrl: './homePage.component.html',
    styleUrls: ['./homePage.component.css'],
    providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})


export class HomeComponent {
    
    //images = [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
   // page = 4;
    // constructor(config: NgbCarouselConfig) {
    //   // customize default values of carousels used by this component tree
    //   config.interval = 2000;
    //   config.wrap = true;
    //   config.keyboard = false;
    //   config.pauseOnHover = false;
    // }
      
/*
      items: Array<any> = [];
      constructor(){
          this.items =[
              { item : '../app/ImageT/1.jpg'},
              { item : '../app/ImageT/2.jpg'},
              { item : '../app/ImageT/3.jpg'},
              { item : '../app/ImageT/4.jpg'},
              { item : '../app/ImageT/5.jpg'},
              { item : '../app/ImageT/6.jpg'}
          ];

          
      }
   */
}

