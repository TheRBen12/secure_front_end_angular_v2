import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthenticationService} from './uaa/services/authentication.service';
import {AuthenticationGuard} from './uaa/Authentication-guard';
import {HttpClientModule} from '@angular/common/http';
import {APP_BASE_HREF, DatePipe} from '@angular/common';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import {UaaModule} from './uaa/uaa.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {NotificationService} from './utils/shared-services/notificationService';
import {CookieService} from 'ngx-cookie-service';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {GraphService} from './utils/shared-services/graph-service';
import {RegistrationService} from './uaa/services/registration-service';

const toastrOptions = {
  timeOut: 1500,
};


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    BrowserAnimationsModule,
    HttpClientModule,
    UaaModule,
    ToastrModule.forRoot(toastrOptions),
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
  ],
  providers: [DatePipe,
    {provide: APP_BASE_HREF, useValue: '/'},
    {provide: AuthenticationService, useClass: AuthenticationService},
    {provide: AuthenticationGuard, useClass: AuthenticationGuard},
    {provide: ToastrService, useClass: ToastrService},
    {provide: NotificationService, useClass: NotificationService},
    {provide: CookieService, useClass: CookieService},
    {provide: GraphService, useClass: GraphService},
    {provide: RegistrationService, useClass: RegistrationService}],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
