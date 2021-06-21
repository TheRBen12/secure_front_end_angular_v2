import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Person} from '../../models/person';

@Injectable()
export class RegistrationService{
  constructor(private http: HttpClient) {
  }

  register(user: Person, password: string): Observable<Person>{
    const userData = {firstName: user.firstName, lastName: user.lastName, email: user.email, password};
    debugger;
    return this.http.post<Person>('http://localhost:8081/api/register', userData);
  }
}
