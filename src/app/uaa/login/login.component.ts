import {Component, Inject, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';
import {NotificationService} from '../../utils/shared-services/notificationService';
import {notifications} from '../../utils/notifications/notifications';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginService: AuthenticationService;
  response: any;
  remember: boolean;
  loginForm: FormGroup;

  constructor(@Inject(AuthenticationService) loginService, private router: Router,
              private fb: FormBuilder, private notificationService: NotificationService) {
    this.loginService = loginService;
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  ngOnInit(): void {
  }

  submit(): void {
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe((loginRes) => {
      this.loginService.authenticatePerson(loginRes.token, loginRes.user, this.remember);
      this.router.navigate(['']).then(() => {
        this.notificationService.success(notifications.loginSuccessfully);
      });
    }, (error: HttpErrorResponse) => {
      if (error.status === 401) {
        this.notificationService.error(notifications.loginFailed);
      }
    });
  }
}
