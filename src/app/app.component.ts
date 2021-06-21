import { Component } from '@angular/core';
import {AuthenticationService} from './uaa/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testrouting';

  constructor(private loginService: AuthenticationService) {
  }

  public isAuthTokenSet(): boolean{
    return this.loginService.isAuthenticated();
  }

  public logout(): void {
    this.loginService.logout();
  }
}
