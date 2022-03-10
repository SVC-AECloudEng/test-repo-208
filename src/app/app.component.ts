import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/auth/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Base Project';

  public isSignedIn = false;

  constructor(private _authService: AuthenticationService, private _router: Router){}

  ngOnInit(){
    this._authService.getUserObservable
      .subscribe(user => {
        if(!user){
          this.isSignedIn = false;
          this._router.navigate([''], {queryParams: {returnUrl: 'dashboard'}});
        } else {
          this.isSignedIn = true;
          this._router.navigate(['dashboard']);
        }
      });
  }
}
