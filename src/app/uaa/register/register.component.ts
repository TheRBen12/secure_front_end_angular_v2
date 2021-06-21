import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';
import {NotificationService} from '../../utils/shared-services/notificationService';
import {RegistrationService} from '../services/registration-service';
import {notifications} from '../../utils/notifications/notifications';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  authService: AuthenticationService;

  constructor(@Inject(AuthenticationService) authService, private router: Router,
              private fb: FormBuilder, private notificationService: NotificationService, private registrationService: RegistrationService) {
    this.authService = authService;
    this.registerForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      password: ['']
    });
  }

  ngOnInit(): void {
  }

  submit(): void {

  }

  saveUser(value: any): void{
    console.log(value);
    this.registrationService.register(value, value.password).subscribe((user) => {
      if (user){
        this.router.navigate(['']).then(() => {
          this.notificationService.success(notifications.registrationSuccessfully);
        });
      }
    });
  }
}
