import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {LoginData} from '../../models/login-data';

@Injectable()
export class MockLoginService{
  loginData: BehaviorSubject<LoginData> = new BehaviorSubject<LoginData>({token: '', user: undefined});

  public login(): Observable<LoginData>{
    return this.loginData;
  }
}
