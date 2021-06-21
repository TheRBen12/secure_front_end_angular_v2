import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationService} from '../../uaa/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   response = '';
  constructor(private authService: AuthenticationService, private http: HttpClient) { }

  ngOnInit(): void {
    const httpHeaders = new HttpHeaders({Authorization: 'Bearer ' + this.authService.getAuthToken()})
      .set('Authorization', 'Bearer ' + this.authService.getAuthToken());

    this.http.get<string>('http://localhost:8081/services/', {headers: httpHeaders}).subscribe((response) => {
      this.response = response;
    });

  }

}
