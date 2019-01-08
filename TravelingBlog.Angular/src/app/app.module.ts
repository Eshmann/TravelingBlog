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

import { ConfigService } from './shared/utils/config.service';
import { FooterComponent } from './footer/footer.component';
import {HomeModule} from './home/home.module';

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
    BrowserModule,
    HttpModule,
    HomeModule,
    routing
  ],
  providers: [ConfigService, {
    provide: XHRBackend,
    useClass: AuthenticateXHRBackend
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
