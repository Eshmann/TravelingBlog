import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';
import { AuthenticateXHRBackend } from './authenticate-xhr.backend';

import { routing } from './app.routing';
/* App Root */
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

/* Account Imports */
import { AccountModule } from './account/account.module';
/* Dashboard Imports */
import { DashboardModule } from './dashboard/dashboard.module';
/*Edit Imports */
import { EditModule } from './edit/edit.module';
import { UserInfoModule } from './userinfo/userinfo.module';

import { ConfigService } from './shared/utils/config.service';
import { FooterComponent } from './footer/footer.component';

import {HomeModule} from './home/home.module';

import { FullTripModule } from './fulltrip/fulltrip.module';
import { SearchModule } from './search/search.module';

import { TripsModule } from './trips/trips.module';
import { AdminModule } from './admin/admin.module';

//config for recaptcha
import { RecaptchaModule, RECAPTCHA_SETTINGS} from 'ng-recaptcha';
import {RecaptchaFormsModule} from 'ng-recaptcha/forms';
import { RecaptchaSettings} from 'ng-recaptcha/recaptcha/recaptcha-settings';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    AccountModule,
    DashboardModule,
    EditModule,
    UserInfoModule,
    BrowserModule,
    HttpModule,
    HomeModule,
    FormsModule,
    TripsModule,
    HttpModule,
    FullTripModule,
    SearchModule,
    routing,
    AdminModule,
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
    routing,
    RouterModule
  ],
  providers: [ConfigService, {
    provide: XHRBackend,
    useClass: AuthenticateXHRBackend
  },
  {
    provide: RECAPTCHA_SETTINGS,
    useValue: 
    {
      siteKey: '6LcYUIcUAAAAAABkzpe0azQcrLOSD5wi1MCm8Va1',
    } as RecaptchaSettings,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
