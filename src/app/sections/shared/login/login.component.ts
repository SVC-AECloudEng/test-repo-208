import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatProgressButtonOptions } from 'mat-progress-buttons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;

  private _returnUrl: string;

  errorMessage: string;

  btnOptions: MatProgressButtonOptions = {
    active: false,
    text: 'Login',
    buttonColor: 'primary',
    barColor: 'accent',
    raised: true,
    mode: 'indeterminate',
    disabled: false
  } 

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private _authService: AuthenticationService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe(
      params => {
        this._returnUrl = params['returnUrl'];
      });
  }

  onLogin(){
    this.btnOptions.active = true;
    this.btnOptions.text = 'Loggin in';

    let username = this.loginForm.get('username').value
    , password = this.loginForm.get('password').value;

    this._authService.authenticate(username, password)
      .then(() => {
        if(this._returnUrl !== undefined)
          this._router.navigate([`${this._returnUrl}`]);
      })
      .catch(error => {
        this.btnOptions.active = false;
        this.btnOptions.text = 'Login';

        if(error.HttpErrorResponse === 'HttpErrorResponse')
          this.errorMessage = 'Unable to connect, please check your network settings.';
        else
          this.errorMessage = 'Username or password incorrect.';
      });
  }
}
