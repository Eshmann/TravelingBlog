import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/modules/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { routing } from './search.rooting';

import { SearchComponent } from './search/search.component';
import { SearchService } from './services/search.services';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    routing,
    SharedModule
  ],
  declarations: [SearchComponent],
  exports: [],
  providers: [SearchService]
})
export class SearchModule { }