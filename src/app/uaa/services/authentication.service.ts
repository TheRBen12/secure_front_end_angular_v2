import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {urlpatterns} from '../urls/urls';
import {Router} from '@angular/router';
import {LoginData} from '../../models/login-data';
import {CookieService} from 'ngx-cookie-service';

@Injectable()
export class AuthenticationService {
  authenticated: boolean;

  constructor(private http: HttpClient, private router: Router, private cookieService: CookieService) {

  }


  public login(email: string, password: string): Observable<LoginData> {
    const loginData = {email, password};
    return this.http.post<LoginData>(urlpatterns.login, loginData, {withCredentials: true});
  }


  public authenticatePerson(accountToken: string, user, remember: boolean): void {
    if (remember){
      localStorage.setItem('accessToken', String(accountToken));
      localStorage.setItem('c_uid', user.dataValues.id);
    }else{
      sessionStorage.setItem('c_uid', user.id);
    }
    this.authenticated = true;
  }

  public isAuthenticated(): boolean {
    const cookie = this.cookieService.get('accessToken');
    return cookie !== '';
  }

  public getAuthToken(): string {
    return this.cookieService.get('accessToken');
  }


  public logout(): void {
    this.authenticated = false;
    this.cookieService.delete('accessToken');
    this.router.navigate(['/login']).then((value) => this.authenticated = false);
  }
}
