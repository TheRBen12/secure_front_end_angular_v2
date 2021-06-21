import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {inject} from '@angular/core/testing';
import {LoginComponent} from './login.component';
import {AuthenticationService} from '../services/authentication.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClient} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NotificationService} from '../../utils/shared-services/notificationService';
import {BehaviorSubject} from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginService;
  let httpTestingController: HttpTestingController;
  let emailControl;
  let passWordControl;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],

      imports: [HttpClientTestingModule, FormsModule, ReactiveFormsModule, RouterTestingModule.withRoutes([]),
        ToastrModule.forRoot()],

      providers: [{provide: AuthenticationService, useClass: AuthenticationService},
        {provide: HttpClient, useClass: HttpClient},
        {provide: ToastrService, useClass: ToastrService},
        {provide: NotificationService, useClass: NotificationService},
      ]
    })
      .compileComponents();
  }));

  beforeEach(inject([AuthenticationService], (loginService$) => {
    loginService = loginService$;
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    emailControl = component.loginForm.get('email');
    passWordControl = component.loginForm.get('password');
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('login process', () => {
    beforeEach(() => {
      httpTestingController = TestBed.get(HttpTestingController);
    });
    it('should call login method of login service when login button was clicked', () => {

      emailControl.setValue('admin');
      passWordControl.setValue('admin');

      const spy = spyOn(loginService, 'login');
      spy.and.callThrough();
      spy.and.returnValue(new BehaviorSubject<any>({}));

      const element = fixture.nativeElement;
      const loginButton = element.querySelector('.login-btn');

      expect(loginButton).toBeTruthy();

      loginButton.click();

      fixture.whenStable().then(() => {
        expect(component.submit).toHaveBeenCalled();
        expect(loginService.login).toHaveBeenCalledWith(emailControl.value, passWordControl.value);
      });
    });

    it('should do a http post-request when user clicks on login button', () => {
      const element = fixture.nativeElement;
      const loginButton = element.querySelector('.login-btn');
      const spy = spyOn(loginService, 'authenticatePerson').and.callThrough();

      emailControl.setValue('admin');
      passWordControl.setValue('admin');

      loginButton.click();

      fixture.whenStable().then(() => {
        const request = httpTestingController.expectOne({url: 'http://localhost:8081/api/authenticate', method: 'POST'});
        const loginData = {email: emailControl.value, password: passWordControl.value};
        request.flush(loginData);

        const token = spy.calls.mostRecent().args[0];
        const remember = spy.calls.mostRecent().args[1];

        expect(loginService.authenticatePerson).toHaveBeenCalledWith(token, remember);
        expect(sessionStorage.getItem('authToken') !== null);
      });
    });
  });
});
